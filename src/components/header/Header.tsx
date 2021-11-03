import styled from "styled-components";

const Header = () => {
  return (
    <HomeContainer>
      Header
    </HomeContainer>
  );
}

export default Header;

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow[400]};
  background-color: #131921;
  background-color: #232f3e;
`;
