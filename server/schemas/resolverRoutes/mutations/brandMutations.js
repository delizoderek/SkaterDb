// addBrand(brandName:String!,skateVideos:[String]): Brand
// removeBrand(brandId: ID!): Confirm
// updateBrand(brandId: ID!, brandName: String, skateVideos: [String]): Brand
const { Brand,SkateVideo } = require("../../../models");

const brandMutations = {
  addBrand: async (parent, { brandName, description ,skateVideos }, context) => {
    const queryObj = { brandName};
    queryObj.skateVideos = skateVideos ? [...skateVideos] : [];
    queryObj.description = description ? description:"";
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

  updateBrand: async (parent, { brandId, brandName, description, skateVideos }, context) => {
    try {
      const queryObj = {};
      if (brandName || description || skateVideos) {
        queryObj.brandName = brandName ? brandName : "";
        queryObj.description = description ? description : "";
        queryObj.skateVideos = skateVideos ? [...skateVideos] : [];

        const updatedBrand = await Brand.findByIdAndUpdate(
          { _id: brandId },
          queryObj
        );

        for (let vidUp of queryObj.skateVideos) {
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
