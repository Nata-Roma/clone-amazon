import { FC } from "react";
import styled from "styled-components";

interface HeaderAllLinkProps {
  config: {
    name: string;
  }
  
}

const HeaderAllLink:FC<HeaderAllLinkProps> = ({config}) => {
  return (
    <AllLinkContainer>
      <span className="iconify" data-icon="ant-design:menu-outlined"></span>
      <span>{config.name}</span>
    </AllLinkContainer>
  );
}

export default HeaderAllLink;

const AllLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  color: ${({ theme }) => theme.colors.white};
  padding: 4px 9px;
  border: 1px solid transparent;
    border-radius: 2px;
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2px;
  }
`