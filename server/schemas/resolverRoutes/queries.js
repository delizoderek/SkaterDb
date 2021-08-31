const { AuthenticationError } = require('apollo-server-express');
const { User, Brand, Skater, SkateVideo } = require('../../models');
const { eventNames } = require('../../models/Soundtrack');

const Query = {
  me: async (parent, args, context) => {
    if (context.user) {
      return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
  },
  brand: async ( parent , { _id }) => {
    return await Brand.findById(_id).populate('skateVideos')
  },
  brands: async () => {
    return await Brand.find().populate('skateVideos');
  },
  skaters: async () => {
    return await Skater.find().populate('skateVideos');
  },
  skater: async (parent, { _id }) => {
    return await Skater.findById(_id).populate('skateVideos');
  },
  skateVideos: async () => {
    return await SkateVideo.find().populate('skaters')
  },
  skateVideo: async (parent, { _id }) => {
    return await SkateVideo.findByID(_id).populate('skaters')
  },
};

module.exports = Query;