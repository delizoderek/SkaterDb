// addBrand(brandName:String!,skateVideos:[String]): Brand
// removeBrand(brandId: ID!): Confirm
// updateBrand(brandId: ID!, brandName: String, skateVideos: [String]): Brand
const {Brand,Skater,SkateVideo} = require('../../models');

const brandMutations = {
    addBrand:async (parent,{brandName,skateVideos},context) => {
        const queryObj = {brandName};
        queryObj.skateVideos = skateVideos? [...skateVideos]:[];
        try {
            const newBrand = await Brand.create(queryObj);
            for(let vidId of skateVideos){
                await SkateVideo.findByIdAndUpdate({_id: vidId},{$addToSet:{brands:newBrand._id}});
            }
            return newBrand;
        } catch (err) {
            console.log(err);
        }
    },

    removeBrand: async (parent, {brandId},context) => {
        try {
            const brand = await Brand.findOneAndDelete({_id: brandId});
            const videos = brand.skateVideos;
            console.log(videos);
            for(let videoId of videos){
                await SkateVideo.findByIdAndUpdate({_id: videoId},{$pull:{brands:brandId}});
            }

            return {success: true};
        } catch (error) {
            console.log(error);
            return {success: false, error: 'Server Side Error'};
        }
    },

    updateBrand: async (parent, {_id,brandName,skateVideos}, context) => {
        try {
            const skater = Skater.find({_id: skaterId});
            return skater;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = brandMutations;