import React from "react";
import * as Styled from "./style";
import { Product_D_small } from "../../../assets/images";

class CardItem extends React.Component {

  render() {
    return (
      <Styled.CardItem>
        <Styled.Content>
          <Styled.FlexRow>
            <Styled.FlexColumn>
              <Styled.Text MarginRight >Apollo<br /> Running Short</Styled.Text>
              <Styled.Text><span>$50.00</span></Styled.Text>
              <Styled.FlexRow>
                <Styled.SizeInfo WhiteBG><span>S</span></Styled.SizeInfo>
                <Styled.SizeInfo BlurBG><span>M</span></Styled.SizeInfo>
              </Styled.FlexRow>
            </Styled.FlexColumn>

            <Styled.FlexRow>
              <Styled.FlexColumn>
                <Styled.SizeInfo WhiteBG><span>+</span></Styled.SizeInfo>
                <Styled.Text><span>1</span></Styled.Text>
                <Styled.SizeInfo WhiteBG><span>-</span></Styled.SizeInfo>
              </Styled.FlexColumn>

              <Styled.ImageBox>
                <Styled.Image src={Product_D_small} />
              </Styled.ImageBox>
            </Styled.FlexRow>

          </Styled.FlexRow>
        </Styled.Content>
      </Styled.CardItem>
    );
  }
}

export default CardItem;