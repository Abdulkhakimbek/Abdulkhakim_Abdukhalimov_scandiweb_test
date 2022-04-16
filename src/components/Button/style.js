import styled, { css } from "styled-components";


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  padding: 13px 12px;
  color: #292929;
  text-transform: uppercase;
  ${props => props.Primary && css`
       width: 292px;
       height: 52px;
       color: #FFFFFF;
       background: #5ECE7B;
  `}
  ${props => props.MediumPrimary && css`
       width: 140px;
       height: 43px;
       font-size: 14px;
       color: #FFFFFF;
       background: #5ECE7B;
  `}
  ${props => props.Secondory && css`
       width: 140px;
       height: 43px;
       font-size: 14px;
       background: #FFFFFF;
       border: 1px solid #1D1F22;
  `} 
  ${props => props.MediumSecondory && css`
      font-weight: 400;
      line-height: 18px;
      width: 63px;
      height: 45px;
      border: 1px solid #1D1F22;
      background: #FFFFFF;
  `} 
  ${props => props.MediumSecondorySelected && css`
      font-weight: 400;
      line-height: 18px;
      width: 63px;
      height: 45px;
      color: #FFFFFF;
      background: #1D1F22;
      border: 1px solid #1D1F22;
  `} 
  ${props => props.SmallSecondory && css`
      font-weight: 400;
      line-height: 18px;
      width: 45px;
      height: 45px;
      border: 1px solid #1D1F22;
      background: #FFFFFF;
  `} 
  ${props => props.Disabled && css`
      font-weight: 400;
      line-height: 18px;
      width: 63px;
      height: 45px;
      color: #A6A6A6;
      background: #FFFFFF;
      border: 1px solid #A6A6A6;
  `} 
`;
