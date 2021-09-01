const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Skater {
    _id:ID!
    pronouns: String
    firstName: String!
    lastName: String!
    stance: StanceEnum
    videos: [SkateVideo]
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

  input NewSkater{
    firstName: String!
    lastName: String!
    pronouns: String
    stance: String
    videos: [String]
  }

  # When updating a skater all inputs are optional
  input SkaterChanges{
    firstName: String
    lastName: String
    pronouns: String
    stance: String
    videos: [String]
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
    updateBrand(brandId: ID!, brandName: String, skateVideos: [String]): Confirm

    # Skater Mutations
    addSkater(input: NewSkater): Skater
    removeSkater(skaterId: ID!): Confirm
    updateSkater(skaterId: ID!, input: SkaterChanges): Confirm

    # # Video Mutations
    # addVideo(): SkateVideo
    # removeVideo(): Confirm
    # updateVideo(): SkateVideo
  }
`;

module.exports = typeDefs;