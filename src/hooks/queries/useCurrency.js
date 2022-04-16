import { gql } from '@apollo/client';

export const CURRENCY = gql`
  query CurrencyQuery {
    currencies {
      label
      symbol
    }
  }
`;


