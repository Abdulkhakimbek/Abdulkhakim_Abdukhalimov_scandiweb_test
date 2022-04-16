import React from "react";
import * as Styled from "./style";
import Button from "../../components/Button";
import { Product_B, Product_D, Product_main } from "../../assets/images";
import { PdpQuery } from '../../hooks/queries/usePpdQuery';
import { Query } from '@apollo/client/react/components';

class PDP extends React.Component {

  images = [
    {
      name: 'Apollo Running Short',
      url: Product_D,
      price: '$50.00'
    },
    {
      name: 'Apollo Running Short',
      url: Product_D,
      price: '$50.00'
    },
    {
      name: 'Apollo Running Short',
      url: Product_D,
      price: '$50.00'
    },
  ]

  sizes = [
    {
      size: 'xs'
    },
    {
      size: 's'
    },
    {
      size: 'M'
    },
    {
      size: 'L'
    },
  ]

  render() {
    return (
      <Styled.PDP>
        <Styled.FlexRow>

          <Query query={PdpQuery}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;

              return (
                <Styled.FlexColumn>
                  {data.product.gallery.map((item) => (
                    <Styled.ImgBox>
                      <Styled.Image src={item} />
                    </Styled.ImgBox>
                  ))}
                </Styled.FlexColumn>
              );

            }}
          </Query>

          {/* <Styled.FlexColumn>
            {this.images.map((image) => (
              <Styled.ImgBox>
                <Styled.Image src={image.url} />
              </Styled.ImgBox>
            ))}
          </Styled.FlexColumn> */}

          <Styled.ImgBox BigBox>
            <Styled.Image src={Product_main} />
          </Styled.ImgBox>
          <Styled.FlexColumn>
            <Styled.Text>Apollo</Styled.Text>
            <Styled.Text Thin >Running Short</Styled.Text>
            <Styled.Text SmallBold >SIZE:</Styled.Text>
            <Styled.FlexRow Gap>
              {this.sizes.map((size) => (
                <Button MediumSecondory >{size.size}</Button>
              ))}
            </Styled.FlexRow>
            <Styled.Text SmallBold >PRICE:</Styled.Text>
            <Styled.Text MediumBold >$50.00</Styled.Text>
            <Button Primary >ADD TO CART</Button>
            <Styled.Description>Find stunning women's cocktail dresses and party dresses.
              Stand out in lace and metallic cocktail dresses and party
              dresses from all your favorite brands.</Styled.Description>
          </Styled.FlexColumn>
        </Styled.FlexRow>
      </Styled.PDP>
    );
  }
}

export default PDP;