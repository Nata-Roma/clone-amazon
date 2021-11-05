import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IHeaderUpperLink } from '../../../utils/interfaces/interfaceHeader';

interface HeaderUpperLinkProps {
  config: IHeaderUpperLink;
}

const HeaderUpperLink: FC<HeaderUpperLinkProps> = ({ config }) => {
  return (
    <HeaderLinkContainer to={config.path ? config.path : '#'}>
      <HeaderLinkTop>{config.top}</HeaderLinkTop>
      <HeaderLinkBottom>{config.bottom}</HeaderLinkBottom>
    </HeaderLinkContainer>
  );
};

export default HeaderUpperLink;

const HeaderLinkContainer = styled(NavLink)`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  padding: 9px;
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
