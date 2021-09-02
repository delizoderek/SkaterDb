const { AuthenticationError } = require("apollo-server-express");
const { User, Brand, Skater, SkateVideo } = require("../../models");
const {addBrand,removeBrand,updateBrand} = require("./mutations/brandMutations");
const {addSkater,removeSkater,updateSkater} = require("./mutations/skaterMutations");
const {addVideo,removeVideo,updateVideo} = require("./mutations/videoMutations");
const { signToken } = require("../../utils/auth");

const Mutation = {
  addUser: async (parent, { username, email, password }) => {
    const user = await User.create({ username, email, password });
    const token = signToken(user);
    if (!user) {
      throw new AuthenticationError("No profile with this email found!");
    }
    return { token, user };
  },

  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new AuthenticationError("No profile with this email found!");
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError("Incorrect password!");
    }

    const token = signToken(user);
    return { token, user };
  },
  addBrand,
  removeBrand,
  updateBrand,
  addSkater,
  removeSkater,
  updateSkater,
  addVideo,
  removeVideo,
  updateVideo
};

module.exports = Mutation;
