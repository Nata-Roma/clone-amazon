import { FC } from 'react';
import styled from 'styled-components';
import { IHeaderBottomLine } from '../../../utils/interfaces/interfaceHeader';
import HeaderAllLink from '../HeaderAllLink';
import HeaderBottomLink from '../HeaderBottomLink';

interface HeaderBottomLineProps {
  config: IHeaderBottomLine;
}

const HeaderBottomLine: FC<HeaderBottomLineProps> = ({ config }) => {
  return (
    <HeaderBottomContainer>
      <HeaderAllLink config={config.bottomAll} />
      {config.bottomLinks.map((link) => (
        <HeaderBottomLink key={link.name} config={link} />
      ))}
    </HeaderBottomContainer>
  );
};

export default HeaderBottomLine;

const HeaderBottomContainer = styled.div`
  background-color: #232f3e;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 7px;
`;
