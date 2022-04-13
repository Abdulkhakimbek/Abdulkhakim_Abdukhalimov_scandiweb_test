import React from "react";
import * as Styled from "./style";
import Card from "../../components/Card";
import { Product_A, Product_B, Product_C, Product_D } from "../../assets/images";

class ProductDetails extends React.Component {

  images = [
    {
      name: 'Apollo Running Short',
      url: Product_D,
      price: '$50.00'
    },
    {
      name: 'Apollo Running Short',
      url: Product_B,
      price: '$50.00'
    },
    {
      name: 'Apollo Running Short',
      url: Product_C,
      price: '$50.00'
    },
  ]

  render() {
    return (
      <Styled.ProductDetails>
        <Styled.Content>
          <Styled.FlexColumn>
            {this.images.map((image) => (
              <Styled.ImgBox>
                <Styled.Image src={image.url} />
              </Styled.ImgBox>
            ))}
          </Styled.FlexColumn>
          <Styled.ImgBox BigBox>
            <Styled.Image src={Product_D} />
          </Styled.ImgBox>

          <Styled.Info>
            <Styled.Text>Apollo</Styled.Text>
            <Styled.Text>Running Short</Styled.Text>
          </Styled.Info>
        </Styled.Content>
      </Styled.ProductDetails>
    );
  }
}

export default ProductDetails;