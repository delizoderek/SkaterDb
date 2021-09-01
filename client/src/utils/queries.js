import { gql } from '@apollo/client';
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
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