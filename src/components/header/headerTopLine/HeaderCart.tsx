import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IHeaderCart } from '../../../utils/interfaces/interfaceHeader';

interface HeaderCartProps {
  config: IHeaderCart;
}

const HeaderCart: FC<HeaderCartProps> = ({ config }) => {
  return (
    <HeaderCartContainer to={config.path}>
      <HeaderCartIcon>
        <span className='iconify' data-icon='bi:cart'></span>
        <CartCounter>0</CartCounter>
      </HeaderCartIcon>

      <HeaderCartName>{config.name}</HeaderCartName>
      
    </HeaderCartContainer>
  );
};

export default HeaderCart;

const HeaderCartContainer = styled(NavLink)`
  display: flex;
  flex-shrink: 0;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.white};
  padding: 9px 9px 5px;
  border: 1px solid transparent;
    border-radius: 2px;
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2px;
  }
`;

const HeaderCartIcon = styled.span`
  font-size: 30px;
  position: relative;
`;

const HeaderCartName = styled.span`
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  padding-bottom: 5px;
`;


const CartCounter = styled.div`
  position: absolute;
  right: -8px;
  top: -7px;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.yellow[400]};
`
