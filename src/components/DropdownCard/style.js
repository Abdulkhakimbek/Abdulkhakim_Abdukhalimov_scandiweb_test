import styled, { css } from "styled-components";

export const DropdownCard = styled.div`
  position:absolute;
  top:78px;
  right:87px;
  max-width:325px;
  max-height: 540px;
  background: #FFFFFF;
  border:1px solid blue;
`;

export const Content = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  padding:8px 16px 20px 13px;
`;

export const Text = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: left;
  color: #1D1F22;
  margin-bottom: 20px;
  span {
    font-weight: 400;
  }
`;

export const Row = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
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