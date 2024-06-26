const { User } = require('../models')

const resolvers = {
  Query: {
      user: async () => {
        return User.find({})
      }
  },
  Mutation: {
     addUser: async (parent, args) => {
        const user = await User.create(args);
        return user
     }
  }
}

module.exports = resolvers