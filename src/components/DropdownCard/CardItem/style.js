import styled, { css } from "styled-components";

export const CardItem = styled.div`
  max-width:293px;
  max-height:137px;
  box-sizing: border-box;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  width:100%;
  height:100%;
  padding:0px;
`;

export const FlexColumn = styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FlexRow = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  color: #1D1F22;
 
  span {
    font-weight: 500;
    text-align: right;
  }
  ${props => props.MarginRight && css`
    margin-right: 18px;
  `}
`;

export const SizeInfo = styled.div`
  width: 24px;
  height: 24px;
  text-align: center;
  margin-right: 8px;
  span {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
  }
  ${props => props.WhiteBG && css`
    border: 1px solid #1D1F22;
    color: #1D1F22;
  `}
  ${props => props.BlurBG && css`
    background: rgba(166, 166, 166, 0.2);
    border: 1px solid #A6A6A6;
    color: #A6A6A6;
  `}
`;

export const ImageBox = styled.div`
   max-width:105px;
   max-height: 137px;
`;

export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  background-repeat:no-repeat;
`;

