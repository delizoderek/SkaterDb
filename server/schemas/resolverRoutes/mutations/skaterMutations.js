const {Skater,SkateVideo} = require('../../../models');

const skaterMutations = {
    addSkater:async (parent,{newSkater},context) => {
        try{
            const newSkater = await Skater.create();
            return newSkater;
        } catch (error){
            console.log(error);
            return {_id: 'error'};
        }
    },

    removeSkater: async (parent, {skaterId},context) => {
        try {
            const skater = Skater.findOneAndDelete({_id: skaterId});
            const videos = skater?.videos || [];
            for(let vidId of videos){
                await SkateVideo.findByIdAndDelete({_id:vidId},{$pull: {skaters:skaterId}});
            }
            return {success:true};
        } catch (error) {
            console.log(error);
            return {success:false, error:'Something happened on the server ends'};
        }
    },

    updateSkater: async (parent, {skaterId,input},context) => {
        try {
            console.log(input);
            const skater = await Skater.findByIdAndUpdate({_id: skaterId},input,{new:true});
            if(input.videos){
                for(let vidId of input.videos){
                    await SkateVideo.findByIdAndUpdate(vidId,{$addToSet:{skaters:{skaterId}}});
                }
            }
            return {success:true};
        } catch (error) {
            console.log(error);
            return {success:false, error:'Something happened on the server ends'};
        }
    }
};

module.exports = skaterMutations;