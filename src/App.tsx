import styled from 'styled-components';

const App = () => {
  return <AppContainer>APP</AppContainer>;
};

export default App;

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow[400]};
`;
