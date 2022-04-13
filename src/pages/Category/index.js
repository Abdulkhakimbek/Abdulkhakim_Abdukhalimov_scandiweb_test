import React from "react";
import * as Styled from "./style";
import Card from "../../components/Card";
import { Product_A, Product_B, Product_C, Product_D } from "../../assets/images";

class Category extends React.Component {

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
    {
      name: 'Apollo Running Short',
      url: Product_A,
      price: '$50.00'
    },
    {
      name: 'Apollo Running Short',
      url: Product_C,
      price: '$50.00'
    },
    {
      name: 'Apollo Running Short',
      url: Product_D,
      price: '$50.00'
    },
  ]

  render() {
    return (
      <Styled.Category>
        <Styled.CategoryContent>
          <Styled.CategoryName>Category Name</Styled.CategoryName>
          <Styled.Cards>
            {this.images.map(image => (
              <Card
                ImgSrc={image.url}
                ProductName={image.name}
                ProductPrice={image.price}
              />
            ))}
          </Styled.Cards>
        </Styled.CategoryContent>
      </Styled.Category>
    );
  }
}

export default Category;