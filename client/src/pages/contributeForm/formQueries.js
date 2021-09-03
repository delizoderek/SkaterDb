import { gql } from '@apollo/client';

export const GET_VIDWITHID = gql`
query allVideos {
  skateVideos {
    _id
    title
  }
}
`;

export const GET_BRANDWITHID = gql`
  query allBrands {
    brands {
      _id
      brandName
    }
  }`;

export const GET_SKATERWITHID = gql`
query allSkaters {
  skaters {
    _id
    firstName
    lastName
  }
}
`;