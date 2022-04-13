import styled, { css } from "styled-components";
import { Cart, GreenBg, Sign_$ } from "../../../assets/images";

export const Header = styled.header`
  width: 100vw;
  height: 78px;
  background: #FFFFFF;
  position: sticky;
  top: 0;
  z-index:9;
`;

export const HeaderContent = styled.div`
  padding: 24px 101px 0px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Row = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  ${props => props.WithMarginLeft && css`
    margin-left:97px;
  `}
`;

export const RowItem = styled.div`
  padding: 4px 16px 32px;
`;

export const Link = styled.a`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  color: #1D1F22;
`;

export const Logo = styled.img`
  max-width: 41px;
  max-height: 41px;
  object-fit:cover;
  background-repeat:no-repeat;
  padding:5px 5px 6px;
`;

export const Button = styled.button`
 border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  margin-left: 22px;
`;