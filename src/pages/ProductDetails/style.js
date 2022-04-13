import styled, { css } from "styled-components";

export const ProductDetails = styled.div`
  margin:80px 219px 72px 100px;
  background: #FFFFFF;
`;

export const Info = styled = styled.div`
  max-width:292px;
  display:flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display:flex;
  flex-direction:row;
`;

export const FlexColumn = styled.div`
  display:flex;
  flex-direction:column;
`;

export const ImgBox = styled.div`
  max-width:80px;
  max-height: 80px;
  padding: 7px 40px 0 3px;
  ${props => props.BigBox && css`
     max-width:610px;
     max-height: 511px;
  `}
`;

export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  background-repeat:no-repeat;
`;

export const Text = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
`;

