import { gql } from '@apollo/client';

export const CATEGORIES = gql`
query ExampleQuery {
  category {
    name
    products {
      id
      name
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
}

`;
