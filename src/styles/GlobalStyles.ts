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
      --secondaryBackgroundColorDark: #191820;
      --secondaryBackgroundColorLight: #fff;
      --linearRightColorLight: #DB469F;
      --linearRightColorDark: #E8714B;
      --linearLeftColorLight: #2188FF;
      --linearLeftColorDark: #7031C0;
      --modalLightBackground: rgba(255, 255, 255, 0.95);
      --modalDarkBackground: rgba(28, 26, 37, 0.95);
      --modalDarkShadow:#7455ff4c;
      --modalLightShadow:#0000006c;
      --labelColor: #ADADAD;
      --inputDarkBackground: rgba(98, 84, 170, 0.3);
      --inputLightBackground: #D8D8D8;
      --buttonBackgroundLight: #000;
      --buttonBackgroundDark: #4C2A8D;
      --emailLightBackground: #f6f6f6;
      --emailDarkBackground: rgba(98, 84, 170, 0.3);
      --emailLightBorder: #D8D8D8;
      --emailDarkBorder: #4C2A8D;
      --selectColot:#fff;
      --selectLightBackground: #000;
      --selectDarkBackground:#4C2A8D;
      --starsLightColor:#000;
      --starsDarkColor: #7031C0;
      --cardLightBackground: #fff;
      --cardDarkBackground: #1E1A32;
      --iconsLightColorAndButtonBorder: #000;
      --iconsDarkColorAndButtonBorder: #7031C0;
      --figmaLightBg: #333333;
      --figmaDarkBg: #191820;
      --firstBoxShadowLight: rgba(50, 50, 93, 0.25);
      --secondBoxShadowLight: rgba(0, 0, 0, 0.3);
      --firstBoxShadowDark: rgba(112, 49, 192, 0.25);
      --secondBoxShadowDark: rgba(112, 49, 192, 0.3);
  }

  * {
  box-sizing: border-box;
  };


  html {
    position: relative;
    overflow-y: auto;
    /* scrollbar-width: thin;
    scrollbar-color: var(--black) var(--white); */
  }

  body {
    color: var(--black);
    background-color: ${({ theme }) => theme.bodyBackground};
    font-size: 1rem;
    line-height: normal;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    margin: 0;
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

  li{
    list-style: none;
  }

  /* img[alt~="markdown"]{
    width: 300px;
    margin: 0 auto;
  } */

  /* img {
    max-width: 100%;
  } */
`;

export default GlobalStyles;
