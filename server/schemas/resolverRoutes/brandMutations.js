// addBrand(brandName:String!,skateVideos:[String]): Brand
// removeBrand(brandId: ID!): Confirm
// updateBrand(brandId: ID!, brandName: String, skateVideos: [String]): Brand
const { Brand, Skater, SkateVideo } = require("../../models");

const brandMutations = {
  addBrand: async (parent, { brandName, skateVideos }, context) => {
    const queryObj = { brandName };
    queryObj.skateVideos = skateVideos ? [...skateVideos] : [];
    try {
      const newBrand = await Brand.create(queryObj);
      for (let vidId of skateVideos) {
        await SkateVideo.findByIdAndUpdate(
          { _id: vidId },
          { $addToSet: { brands: newBrand._id } }
        );
      }
      return newBrand;
    } catch (err) {
      console.log(err);
    }
  },

  removeBrand: async (parent, { brandId }, context) => {
    try {
      const brand = await Brand.findOneAndDelete({ _id: brandId });
      const videos = brand.skateVideos;
      for (let videoId of videos) {
        await SkateVideo.findByIdAndUpdate(
          { _id: videoId },
          { $pull: { brands: brandId } }
        );
      }

      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false, error: "Server Side Error" };
    }
  },

  updateBrand: async (parent, { brandId, brandName, skateVideos }, context) => {
    try {
      const queryObj = {};
      if (brandName || skateVideos) {
        if (brandName) {
          queryObj.brandName = brandName;
        }

        if (skateVideos) {
          queryObj.skateVideos = skateVideos;
        }
        const updatedBrand = await Brand.findByIdAndUpdate(
          { _id: brandId },
          queryObj
        );

        for (let vidUp of skateVideos) {
          // By using add to set we can ensure duplicate brands will not be added
          await SkateVideo.findByIdAndUpdate(
            { _id: vidUp },
            { $addToSet: { brands: brandId } }
          );
        }

        return { success: true };
      }

      return {
        success: false,
        error:
          "Brand Name and Skate Videos were not defined. Nothing to update",
      };
    } catch (error) {
      console.log(error);
      return { success: false, error: "Server Side Error" };
    }
  },
};

module.exports = brandMutations;
