import styled from "styled-components";
import HeaderCart from "./HeaderCart";
import HeaderSearch from "./HeaderSearch";
import HeaderUpperLink from "./HeaderUpperLink";
import logo from '../../../assets/img/amazon_logo.png';
import { FC } from "react";
import { IHeaderTopLine } from "../../../utils/interfaces/interfaceHeader";
import HeaderTopDelivery from "./HeaderTopDelivery";

interface HeaderTopLineProps {
  config: IHeaderTopLine
}

const HeaderTopLine:FC<HeaderTopLineProps> = ({config}) => {
  return (
    <HeaderTopContainer>
      <Logo href='/'>
          <LogoImg src={logo} />
        </Logo>
        <HeaderTopDelivery config={config.deliver} />
        <HeaderSearch config={config.search} />
        <HeaderUpperLink config={config.account} />
        <HeaderUpperLink config={config.orders} />
        <HeaderCart config={config.cart} />
    </HeaderTopContainer>
  );
}

export default HeaderTopLine;


const HeaderTopContainer = styled.div`
  background-color: #131921;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3px 7px;
  margin: 0 auto;
`;

const Logo = styled.a`
  width: 115px;
  height: 55px;
  display: block;
  align-self: flex-end;
  padding: 14px 9px 0px;
  border: 1px solid transparent;
  border-radius: 2px;
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2px;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;