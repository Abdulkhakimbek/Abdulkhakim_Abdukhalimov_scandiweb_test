import React from "react";
import * as Styled from "./style";
import CardItem from "./CardItem";

class DropdownCard extends React.Component {

  render() {
    return (
      <Styled.DropdownCard>
        <Styled.Content>
          <Styled.Text>My Bag, <span>2 items</span></Styled.Text>
          <CardItem />
          <CardItem />
          <Styled.Row>
            <Styled.Text>Total</Styled.Text>
            <Styled.Text>$100.00</Styled.Text>
          </Styled.Row>
        </Styled.Content>
      </Styled.DropdownCard>
    );
  }
}

export default DropdownCard;