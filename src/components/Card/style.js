import styled from "styled-components";

export const Card = styled.div`
  max-width: 386px;
  max-height: 444px;
  background: #FFFFFF;
  margin-top: 103px;
  &:hover {
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }
`;

export const CardContent = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;

export const ImgBox = styled.div`
  width: 354px;
height: 330px;
`;

export const Image = styled.img`
  width:100%;
  height:100%;
  padding-bottom: 24px;
  object-fit:cover;
  background-repeat:no-repeat;
`;

export const ProductName = styled.p`
  font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 160%;
color: #1D1F22;
`;

export const ProductPrice = styled.p`
   font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: #1D1F22;
`;
