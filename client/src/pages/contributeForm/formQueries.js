import { gql } from '@apollo/client';
export const GET_VIDWITHID = gql`
query allVideos {
  skateVideos {
    _id
    title
  }
}
`;