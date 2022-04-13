import React from "react";
import * as Styled from "./style";
import { Cart, GreenBg, Sign_$, Sign_1, Empty_Cart, greenCart, GreenCart, Group_1, Group_2, Group, logo_transparent } from "../../../assets/images";

class Header extends React.Component {

  navMenu = [
    {
      name: 'Women',
      route: '/women',
    },
    {
      name: 'Men',
      route: '/men',
    },
    {
      name: 'Kids',
      route: '/kids',
    },
  ]

  render() {
    return (
      <Styled.Header>
        <Styled.HeaderContent>
          <Styled.Row>
            {this.navMenu.map((menu) => (
              <Styled.RowItem>
                <Styled.Link>{menu.name}</Styled.Link>
              </Styled.RowItem>
            ))}
          </Styled.Row>
          <Styled.Logo src={Group} />
          <Styled.Row WithMarginLeft>
            <Styled.Button><Styled.Logo src={Group_2} /></Styled.Button>
            <Styled.Button><Styled.Logo src={Empty_Cart} /></Styled.Button>
          </Styled.Row>
        </Styled.HeaderContent>
      </Styled.Header>
    );
  }
}

export default Header;