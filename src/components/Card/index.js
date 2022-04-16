import React from "react";
import * as Styled from "./style";
import { GreenCart } from "../../assets/images";

class Card extends React.Component {

  render() {
    return (
      <Styled.Card>
        <Styled.CardContent>
          <Styled.ImgBox>
            <Styled.Image src={this.props.ImgSrc} />
          </Styled.ImgBox>
          <Styled.ProductName>{this.props.ProductName}</Styled.ProductName>
          <Styled.ProductPrice>$ {this.props.ProductPrice}</Styled.ProductPrice>
        </Styled.CardContent>
      </Styled.Card>
    );
  }
}

export default Card;