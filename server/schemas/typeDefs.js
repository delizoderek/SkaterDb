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

  type Confirm{
    success:Boolean!,
    error: String
  }

  enum StanceEnum {
    Regular
    Goofy
    Both
    Unknown
  }

  type Query {
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    skaters: [Skater]
    skater(_id:ID!): Skater
    # Query multiple skate videos given a skater id and name
    skateVideos:[SkateVideo]
    skateVideo (_id: ID!):SkateVideo
    brand(_id:ID!): Brand
    brands:[Brand]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    # Brand Mutations
    addBrand(brandName:String!,skateVideos:[String]): Brand
    removeBrand(brandId: ID!): Confirm
    updateBrand(brandId: ID!, brandName: String, skateVideos: [String]): Brand

    # # Skater Mutations
    # addSkater(): Skater
    # removeSkater(): Confirm
    # updateSkater(): Skater

    # # Video Mutations
    # addVideo(): SkateVideo
    # removeVideo(): Confirm
    # updateVideo(): SkateVideo
  }
`;

module.exports = typeDefs;