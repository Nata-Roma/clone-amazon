import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IHeaderUpperLink } from '../../../utils/interfaces/interfaceHeader';

interface HeaderTopDeliveryProps {
  config: IHeaderUpperLink;
}

const HeaderTopDelivery: FC<HeaderTopDeliveryProps> = ({ config }) => {
  return (
    <HeaderLinkWrapper>
      <span className='iconify' data-icon='eva:pin-outline'></span>
      <HeaderLinkContainer to={config.path ? config.path : '#'}>
        <HeaderLinkTop>{config.top}</HeaderLinkTop>
        <HeaderLinkBottom>{config.bottom}</HeaderLinkBottom>
      </HeaderLinkContainer>
    </HeaderLinkWrapper>
  );
};

export default HeaderTopDelivery;

const HeaderLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  font-size: 24px;
  padding: 9px;
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderLinkContainer = styled(NavLink)`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  
  border: 1px solid transparent;
  border-radius: 2px;
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2px;
  }
`;

const HeaderLinkTop = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

const HeaderLinkBottom = styled.span`
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
`;
