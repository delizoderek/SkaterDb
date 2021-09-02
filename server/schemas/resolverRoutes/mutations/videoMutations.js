const {Brand,Skater,SkateVideo} = require('../../../models');

const videoMutations = {
    addVideo: async (parent,{title, input}) => {

        try {
            const createdVideo = await SkateVideo.create({title,...input});
            const newVideo = {title};
            newVideo.releaseDate = input.releaseDate || "";
            if(input.brands){
                for(let brandId of brands){
                    await Brand.findByIdAndUpdate(brandId,{$addToSet:{skateVideos: videoId}});
                }
            }

            if(input.skaters){
                for(let skaterId of skaters){
                    await Skater.findByIdAndUpdate(skaterId,{$addToSet:{videos: videoId}});
                }
            }

            return createdVideo;
        } catch (error) {
            console.log(error);
        }
    },

    removeVideo: async (parent, {videoId}) => {
        try {
            const removedVideo= SkateVideo.findOneAndDelete({_id: videoId});
            const brands = removedVideo?.brands || [];
            const skaters = removedVideo?.brands || [];

            for(let brandId of brands){
                await Brand.findByIdAndUpdate(brandId,{$pull:{skateVideos: videoId}});
            }

            for(let skaterId of skaters){
                await Skater.findByIdAndUpdate(skaterId,{$pull:{videos: videoId}});
            }

            return {success:true};
        } catch (error) {
            console.log(error);
            return {success:false, error:'Something happened on the server ends'};
        }
    },

    updateVideo: async (parent,{videoId, title, input}) => {
        const queryObj = {};
        if(title){
            queryObj.title = title;
        }

        if(input.releaseDate){
            queryObj.releaseDate = input.releaseDate;
        }

        if(input.vidLink){
            queryObj.vidLink = input.vidLink;
        }

        if(input.skaters){
            queryObj.skaters = input.skaters;
        }

        if(input.brands){
            queryObj.brands = input.brands;
        }

        try {
            const updatedSkater = await SkateVideo.findByIdAndUpdate(videoId,queryObj,{new:true});
            if(input.brands){
                for(let brandId of input.brands){
                    await Brand.findByIdAndUpdate(brandId,{$addToSet:{skateVideos: videoId}});
                }
            }

            if(input.skaters){
                for(let skaterId of input.skaters){
                    await Skater.findByIdAndUpdate(skaterId,{$addToSet:{videos: videoId}});
                }
            }
            return {success:true};
        } catch (error) {
            console.log(error);
            return {success:false, error:'Something happened on the server ends'};
        }
    }
};

module.exports = videoMutations;