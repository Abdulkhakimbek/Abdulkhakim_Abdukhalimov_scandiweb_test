import styled, { css } from "styled-components";

export const PDP = styled.div`
  position:relative;
  display:flex;
  align-items:flex-start;
  
  background: #FFFFFF;
  border:1px solid blue;
`;

export const FlexRow = styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   ${props => props.Gap && css`
     gap:12px;
  `} 
`;

export const FlexColumn = styled.div`
  display:flex;
  flex-direction:column;
`;

export const ImgBox = styled.div`
  max-width:80px;
  max-height: 80px;
  margin-bottom: 32px;
  ${props => props.BigBox && css`
     max-width:610px;
     max-height: 511px;
     margin:0px 80px 0px 20px;
  `} 
`;

export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  background-repeat:no-repeat;
`;

export const Details = styled.div`
   width:292px;
`;

export const Text = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
  margin-bottom: 16px;
  ${props => props.Thin && css`
    font-weight: 400;
  `} 
  ${props => props.SmallBold && css`
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    margin:27px 0px 10px;
  `} 
  ${props => props.MediumBold && css`
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin:10px 0px 20px;
  `} 
  ${props => props.TallThin && css`
     font-weight: 400;
     font-size: 16px;
     line-height: 159.96%;
  `} 
`;

export const Description = styled.div`
   width: 292px;
   height: 103px;
   font-weight: 400;
   font-size: 16px;
   line-height: 159.96%;
   padding-top: 40px;
`;