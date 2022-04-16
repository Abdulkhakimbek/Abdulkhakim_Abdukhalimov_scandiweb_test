import React from "react";
import * as Styled from "./style";
import { Query } from '@apollo/client/react/components';
import { CATGNAMES } from '../../../hooks/queries/useCatgNamesQuery';
import { Empty_Cart, Group_2, Group } from "../../../assets/images";

class Header extends React.Component {

  render() {
    return (
      <Styled.Header>
        <Styled.HeaderContent>

          <Query query={CATGNAMES}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;

              return (
                <Styled.Row>
                  {data.categories.map((menu) => (
                    <Styled.RowItem>
                      <Styled.Link>{menu.name}</Styled.Link>
                    </Styled.RowItem>
                  ))}
                </Styled.Row>
              );
            }}
          </Query>

          <Styled.Logo src={Group} />
          <Styled.Row CustomMargin>
            <Styled.Button><Styled.Logo src={Group_2} /></Styled.Button>
            <Styled.Button><Styled.Logo CustomPadding src={Empty_Cart} /></Styled.Button>
          </Styled.Row>
        </Styled.HeaderContent>
      </Styled.Header>
    );
  }
}

export default Header;