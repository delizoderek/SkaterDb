// addBrand(brandName:String!,skateVideos:[String]): Brand
// removeBrand(brandId: ID!): Confirm
// updateBrand(brandId: ID!, brandName: String, skateVideos: [String]): Brand
const {Brand,Skater,SkateVideo} = require('../../models');

const brandMutations = {
    addBrand:async (parent,{brandName,skateVideos},context) => {
        const queryObj = {brandName};
        if(skateVideos){
            queryObj.skateVideos = [...skateVideos];
        }

        try {
            const newBrand = await Brand.create(queryObj);
            return newBrand;
        } catch (err) {
            console.log(err);
        }
    },

    removeBrand: async (parent, {brandId},context) => {
        try {
            const skater = await Brand.findByIdAndDelete({_id: brandId});
            // const videos = [...skater.videos];
            if(skater){
                return {success: true};
            }
            return {success: false, error: 'Server Side Error'};
        } catch (error) {
            console.log(error);
            return {success: false, error: 'Server Side Error'};
        }
    },

    updateBrand: async (parent, args, context) => {
        try {
            const skater = Skater.find({_id: skaterId});
            return skater;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = brandMutations;