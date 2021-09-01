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
      releasedate
      vidLink
      brand
      skaters
      soundtrack
    }
  }
`;