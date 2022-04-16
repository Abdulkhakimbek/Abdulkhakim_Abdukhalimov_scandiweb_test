import { gql } from '@apollo/client';

// export const GET_COUNTRIES = gql`
//   query GetCountries {
//     countries {
//       name
//     }
//   }
// `;

export const GET_COUNTRY_DATA = gql`
  query GetCountryData($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;