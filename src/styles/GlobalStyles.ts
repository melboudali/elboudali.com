import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
      --black: #000;
      --white: #fff;
      --red: #D93939;
      --green: #2A9244;
      --primaryColorDark: #dedee3;
      --primaryColorLight: #000;
      --secondaryColor: #A5A5A5;
      --primaryBackgroundColorDark: #16141F;
      --primaryBackgroundColorLight: #FBFBFB;
      --secondaryBackgroundColorDark: #1C1A25;
      --secondaryBackgroundColorLight: #fff;
      --linearRightColorLight: #DB469F;
      --linearRightColorDark: #E8714B;
      --linearLeftColorLight: #2188FF;
      --linearLeftColorDark: #7031C0;
      --modalLightBackground: rgba(255, 255, 255, 0.95);
      --modalDarkBackground: rgba(28, 26, 37, 0.95);
      --modalDarkShadow:#7455ff4c;
      --modalLightShadow:#0000006c;
      --labelColor: #BDBDBD;
      --inputDarkBackground: rgba(98, 84, 170, 0.3);
      --inputLightBackground: #e4e4e4;
      --buttonBackgroundLight: #000;
      --buttonBackgroundDark: #4C2A8D

  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  };


  html {
    position: relative;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--black) var(--white);
  }

  body {
    color: var(--black);
    background: ${({ theme }) => theme.bodyBackground};
    font-size: 1rem;
    line-height: normal;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    transition: background 0.2s linear;
  }

 
  /* *:focus {
    outline: none;
  }; */

  a, a:visited {
    text-decoration: none;
  }

  button{
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }

  .gatsby-image-wrapper img[src*=base64] {
    image-rendering: pixelated;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bodyBackground};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.titleColor};
    border-radius: 6px;
    border: 3px solid ${({ theme }) => theme.bodyBackground};
  }
 
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
