const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(author: [Author], description: String!, title: String!, bookId: Int!, image): Auth
    removeBook: (bookId: Int!): Auth
    removeUser: User
  }

  type Book {
    bookId(bookId: ID!)
    authors(name: [Author], description: String!, title: String!,
        image: image, link: link)
  }

`;

module.exports = typeDefs;