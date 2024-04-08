const gql = require('@apollo/server')

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(input: BookInput!): User
      removeBook(BookId: ID!): User
  }
  
type User {
  _id: ID!
  username: String !
  email: String!
  bookCount: Int!
  savedBooks: [Book!]
}

type Book {
  bookId: ID!
  authors: ['']
  description: String
  title: String!
  image: String
  link: String
}

type Auth {
    token: String
    user: User
  }

`
module.exports = typeDefs;