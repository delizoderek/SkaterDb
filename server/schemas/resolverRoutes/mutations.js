const { AuthenticationError } = require('apollo-server-express');
const { User, Brand, Skater, SkateVideo } = require('../../models');
const { signToken } = require('../../utils/auth');

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
};

module.exports = Mutation;
