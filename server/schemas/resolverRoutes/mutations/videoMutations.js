const {Brand,Skater,SkateVideo} = require('../../../models');

const videoMutations = {
    addVideo: async (parent,{title, input}) => {
        try {
            const createdVideo = await SkateVideo.create({title,...input});
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
        const queryObj = {title,...input};
        try {
            const updatedSkater = await SkateVideo.findByIdAndUpdate(videoId,queryObj,{new:true});
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
            return updatedSkater;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = videoMutations;