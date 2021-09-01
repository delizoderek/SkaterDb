const db = require("../config/connection");
const { User, Brand, Skater, SkateVideo } = require("../models");
const brandSeeds = require("./brands.json");
const skaterSeeds = require("./skaters.json");
const videoSeeds = require('./videos.json');


class ReferenceIds {
  constructor(){
    this.brands = [];
    this.skaters = [];
    this.videos = [];
  }
  
  getBrandId(brandName){
    for(let i = 0; i < this.brands.length; i++){
      if(this.brands[i].title === brandName){
        return this.brands[i].id;
      }
    }
    return "";
  }
  
  getSkaterId(skaterName){
    for(let i = 0; i < this.skaters.length; i++){
      if(this.skaters[i].fullName === skaterName){
        return this.skaters[i].id;
      }
    }
    return "";
  }
  getVideoId(videoName){
    for(let i = 0; i < this.videos.length; i++){
      if(this.videos[i].title === videoName){
        return this.videos[i].id;
      }
    }
    return "";
  }
};

const idReference = new ReferenceIds();
const populateBrandIds = async () => {
  const allBrands = await Brand.find({});
  let brandIds = [];
  if (allBrands) {
    brandIds = allBrands.map((brand) => {
      return {
        id: brand._id,
        title: brand.brandName,
      };
    });
    idReference.brands = brandIds;
    return true;
  }
  return false;
}

const populateSkaterIds = async () => {
  const allSkaters = await Skater.find({});
  let skaterIds = [];
  if (allSkaters) {
    skaterIds = allSkaters.map((skater) => {
      return {
        id: skater._id,
        fullName: `${skater.firstName} ${skater.lastName}`,
        firstName: skater.firstName,
        lastName: skater.lastName,
      };
    });
    idReference.skaters = skaterIds;
    return true;
  }
  return false;
}

const populateVideoIds = async () => {
  const allVideos = await SkateVideo.find({});
  let videoIds = [];
  if (allVideos) {
    videoIds = allVideos.map((video) => {
      return {
        id: video._id,
        title: video.title,
      };
    });
    idReference.videos = videoIds;
    return true;
  }
  return false;
}

// First brands are created with an empty video list
// Then Skaters are created with an empty video list
// Finally Skate Videos are added. Arrays are created for the the skaters and brands that need to be updated
db.once("open", async () => {
  console.log("------------Adding Brands------------");
  await Brand.deleteMany({});
  const newBrandSeeds = brandSeeds.map((brand) => {
    return {
      brandName: brand.brandName,
      logo: brand.logo,
      description: brand.description,
      skateVideos: [],
    };
  });
  await Brand.create(newBrandSeeds);
  console.log("------------Brands Complete------------");
  console.log("------------Adding Skater`s------------");
  await Skater.deleteMany({});
  const newSkaterSeeds = skaterSeeds.map((skater) => {
    return {
      pronouns: skater.pronouns,
      firstName: skater.firstName,
      lastName: skater.lastName,
      stance: (skater.stance === '') ? "Unknown" : skater.stance,
      videos: [],
    };
  });
  await Skater.create(newSkaterSeeds);
  console.log("------------Skater`s Complete------------");
  console.log("------------Adding Video`s------------");
  // Fill the idReference object with id pairs
  await populateBrandIds();
  await populateSkaterIds();
  await SkateVideo.deleteMany({});

  // Update arrays that will be used for adding videos to the skater and brand documents
  const brandUpdates = [];
  const skaterUpdates = [];
  const newVideoSeeds = videoSeeds.map((video) => {
    const brandIds = [];
    const skaterIds = [];
    for(let brand of video.brand){
      const id = idReference.getBrandId(brand);
      brandUpdates.push({
        id,
        title: video.title,
      });
      brandIds.push(id);
    }
    for(let skater of video.skaters){
      const id = idReference.getSkaterId(skater);
      skaterUpdates.push({
        id,
        title: video.title,
      });
      skaterIds.push(id);
    }
    return {
      title: video.title,
      release_date: video.release_date,
      videoCover: video.videoCover,
      brands: brandIds,
      skaters: skaterIds,
      vidLink: video.vidLink[0],
    }
  });
  await SkateVideo.create(newVideoSeeds);
  console.log("------------Video`s Complete------------");
  console.log("------------Adding Video Id's to Brands------------");
  await populateVideoIds();
  for(let update of brandUpdates){
    const {id,title} = update;
    const videoId = idReference.getVideoId(title);
    await Brand.findByIdAndUpdate({_id:id},{$addToSet: {skateVideos:videoId}});
  }
  console.log("------------Video Id's now connected to Brands------------");
  console.log("------------Adding Video Id's to Skaters------------");
  for(let update of skaterUpdates){
    const {id,title} = update;
    const videoId = idReference.getVideoId(title);
    await Skater.findByIdAndUpdate({_id:id},{$addToSet: {videos:videoId}});
  }
  console.log("------------Video Id's now connected to Skaters------------");
  console.log("all done!");
  process.exit(0);
});
