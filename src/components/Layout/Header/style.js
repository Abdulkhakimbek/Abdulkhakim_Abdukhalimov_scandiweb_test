import styled, { css } from "styled-components";
import { Cart, GreenBg, Sign_$ } from "../../../assets/images";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #FFFFFF;
  top: 0;
  z-index: 111;
`;

export const HeaderContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    margin: 0 auto;
    padding-top:24px;
    padding-bottom: 15px;
`;

export const Row = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: flex-start;
  ${props => props.CustomMargin && css`
      margin-left:90px;
      margin-right: 7px;
  `}
`;

export const RowItem = styled.div`
  padding: 5px 16px 15px;
`;

export const Link = styled.a`
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
  ${props => props.CustomPadding && css`
      padding-top: 5px;
  `}
`;

export const Button = styled.button`
 border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  margin-left: 22px;
`;