const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Skater {
    _id:ID!
    pronouns: String
    firstName: String!
    lastName: String!
    stance: StanceEnum

  }

  type SkateVideo {
    _id:ID!
    title: String!
    release_date: String
    vidLink: String
    skaters: [Skater]
  }

  type Brand {
    _id:ID!
    brandName: String!
    skateVideos: [SkateVideo]

  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  enum StanceEnum {
    Regular
    Goofy
    Both
    Unkown
  }

  type Query {
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    skaters: [Skater]
    # Query multiple skate videos given a skater id and name
    skateVideos (skater: ID, name:String):[SkateVideo]
    skateVideo (_id: ID!):SkateVideo
    brand(_id:ID!): Brand
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
