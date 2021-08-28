const { AuthenticationError } = require('apollo-server-express');
const { User,Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('books');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({email: email});

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    // saveBook(authors: $saveBookAuthors, description: $saveBookDescription, bookId: $saveBookBookId, title: $saveBookTitle)
    saveBook: async (parent, args, context) => {
      // If user not signed in then they cannot save a book
      // if (!context.user) {
      //   throw new AuthenticationError('You need to be logged in!');
      // }
      try{
        const newBook = await Book.create(args);
        console.log(newBook);
      } catch (err){
        console.log(err);
      }
      User.findOne({ _id: context.user._id }).populate('books');
      // Create a new book
      // Add the book id to the user
    },
  },
};

module.exports = resolvers;
