import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
   * {
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.textColor};
   }
   *::before {
      border: border-box;
   }
   *::after {
      border: border-box;
   }
   body,
   html {
      overflow-x: hidden !important;
      height: 100vh;
   }
   body {
      background-color: ${({ theme }) => theme.backgroundColor};
   }
   #__next {
      display: flex;
      flex-direction: column;
      min-height: 100%;
   }

   /* REMOVE DEFAULT STYLE */

   button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 1rem;
   }

   input {
      border: none;
      background-color: transparent;
   }
   
   input:focus {
      outline: none;
   }

`;

export default GlobalStyles;
