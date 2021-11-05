import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IHeaderBottomLink } from '../../utils/interfaces/interfaceHeader';

interface HeaderBottomLinkProps {
  config: IHeaderBottomLink;
}

const HeaderBottomLink: FC<HeaderBottomLinkProps> = ({ config}) => {
  return (
    <HeaderLinkContainer to={config.path}>
      {config.name}
    </HeaderLinkContainer>
  );
};

export default HeaderBottomLink;

const HeaderLinkContainer = styled(NavLink)`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  padding: 4px 9px;
  border: 1px solid transparent;
    border-radius: 2px;
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2px;
  }
`;
