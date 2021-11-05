import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, 
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  input,
  button,
  textarea,
  select {
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
  }
  button,
  a,
  select {
    cursor: pointer;
  }
`;
