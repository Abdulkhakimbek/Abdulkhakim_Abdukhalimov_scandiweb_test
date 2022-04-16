import React from 'react';

import { useQuery } from '@apollo/client';


import { GET_COUNTRIES } from '../../hooks/queries/useMockQuery';

import { GET_COUNTRY_DATA } from '../../hooks/queries/useMockQuery';
import { useLazyQuery } from '@apollo/client';

// type Country = {
//   name: string;
// };


const AppMock = () => {
  const [getCountries, { data, loading, error }] = useLazyQuery(GET_COUNTRY_DATA);

  const getUI = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>There was an error</div>;

    if (data) {
      const { country } = data;
      return (
        <ul>
          <li>{country.capital}</li>
          <li>{country.currency}</li>
          <li>{country.emoji}</li>
          <li>{country.name}</li>
        </ul>
      );
    }
    return <div>No results</div>;
  };

  const handleButtonClick = () => {
    getCountries({ variables: { code: 'BR' } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error</div>;


  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data</button>
      {getUI()}
    </div>
  );
};

export default AppMock;