const {Skater,SkateVideo} = require('../../../models');

const skaterMutations = {
    addSkater:async (parent,{newSkater},context) => {
        console.log(newSkater);
    },

    removeSkater: async (parent, {skaterId},context) => {
        try {
            const skater = Skater.find({_id: skaterId});
            console.log(skater);
            return context.user;
        } catch (error) {
            console.log(error);
        }
    },

    updateSkater: async (parent, {skaterId},context) => {
        try {
            const skater = Skater.find({_id: skaterId});
            console.log(skater);
            return context.user;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = skaterMutations;