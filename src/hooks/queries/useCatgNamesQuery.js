import { gql } from '@apollo/client';

export const CATGNAMES = gql`
query CatgNamesQuery {
  categories {
    name
  }
}

`;