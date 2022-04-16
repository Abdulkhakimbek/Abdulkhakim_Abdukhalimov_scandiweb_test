import React from "react";
import * as Styled from "./style";

import { CURRENCY } from '../../hooks/queries/useCurrency';
import { Query } from '@apollo/client/react/components';

class Currency extends React.Component {
  render() {
    return (
      <Styled.Currency>
        <Styled.Content>

          <Query query={CURRENCY}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;

              return (
                <Styled.Text>
                  {data.currencies.map(item => (
                    <Styled.Text>{item.label}</Styled.Text>
                  ))}
                </Styled.Text>
              );
            }}
          </Query>


        </Styled.Content>
      </Styled.Currency>
    );
  }
}

export default Currency;