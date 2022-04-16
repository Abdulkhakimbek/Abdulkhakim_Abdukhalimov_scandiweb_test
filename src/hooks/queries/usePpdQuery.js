import { gql } from '@apollo/client';

export const PdpQuery = gql`
query ExampleQuery($productId: String!) {
  product(id: "jacket-canada-goosee") {
    id
    name
    inStock
    gallery
    description
    prices {
      amount
      currency {
        symbol
      }
    }
  }
}
`;


