import { FC } from 'react';
import styled from 'styled-components';
import { IHeader } from '../../utils/interfaces/interfaceHeader';
import HeaderTopLine from './headerTopLine/HeaderTopLine';
import HeaderBottomLine from './headerBottomLine/HeaderBottomLine';

interface HeaderProps {
  langConfig: IHeader;
}

const Header: FC<HeaderProps> = ({ langConfig }) => {
  return (
    <HeaderContainer>
      <HeaderTopLine config={langConfig.topLine} />
      <HeaderBottomLine config={langConfig.bottomLine} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
`;


