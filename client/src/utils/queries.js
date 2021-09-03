import { gql } from '@apollo/client';
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const GET_SKATERS = gql`
  query allSkaters {
    skaters {
      _id
      firstName
      lastName
      pronouns
      stance
      videos{
        title
        vidLink
      }
    }
  }
`;

export const GET_BRANDS = gql`
  query allBrands {
    brands {
      _id
      brandName
      description
      skateVideos {
        _id
        vidLink
        skaters {
        _id
        firstName
        lastName
        pronouns
        stance
        }
      }
    }
  }
`;

export const GET_VIDEOS = gql`
  query allVideos {
    videos {
      title
      releaseDate
      vidLink
      brand
      skaters
      soundtrack
    }
  }
`;

export const GET_SINGLE_SKATER = gql`
  query getSingleSkater($skaterId: ID!) {
    skater(skaterId: $skaterId) {
      _id
      firstName
      lastName
      pronouns
      stance
      videos{
        title
        releaseDate
        vidLink
        brand
        skaters
        soundtrack
      }
    }
  }
`;

export const GET_SINGLE_VIDEO = gql`
  query getSingleVideo($skateVideo: ID!) {
    skateVideo(skateVideoId: $skateVideoId) {
      _id
      title
      releaseDate
      vidLink
      brand
      skaters{
        firstName
        lastName
      }
      soundTrack
    }
  }
`;