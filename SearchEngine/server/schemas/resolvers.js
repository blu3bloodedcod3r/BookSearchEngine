const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
  
      User: async (parent, { UserId }) => {
        return User.findOne({ _id: UserId });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
    Mutation: {
      addUser: async (parent, { name, email, password }) => {
        const User = await User.create({ name, email, password });
        const token = signToken(User);
  
        return { token, User };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No User with this email found!');
        }
  
        const correctPw = await User.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(Uuer);
        return { token, user };
      },
      // Set up mutation so a logged in user can only remove their User and no one else's
      removeUser: async (parent, args, context) => {
        if (context.user) {
          return User.findOneAndDelete({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    },
  };
  
  module.exports = resolvers;