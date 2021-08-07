import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
      --black: #000;
      --white: #fff;
      --red: #D93939;
      --green: #2A9244;
      --primaryColorDark: #dedee3;
      --primaryColorLight: var(--black);
      --secondaryColor: #A5A5A5;
      --primaryBackgroundColorDark: #16141F;
      --primaryBackgroundColorLight: #FBFBFB;
      --secondaryBackgroundColorDark: #191820;
      --secondaryBackgroundColorLight: var(--white);
      --linearRightColorLight: #DB469F;
      --linearRightColorDark: #E8714B;
      --linearLeftColorLight: #2188FF;
      --linearLeftColorDark: #7031C0;
      --modalLightBackground: rgba(255, 255, 255, 0.95);
      --modalDarkBackground: rgba(28, 26, 37, 0.95);
      --modalDarkShadow: #7455ff4c;
      --modalLightShadow: #0000006c;
      --modalCloseStrokeLight: var(--white);
      --modalCloseStrokeDark: var(--black);
      --labelColor: #ADADAD;
      --inputDarkBackground: rgba(98, 84, 170, 0.3);
      --inputLightBackground: #D8D8D8;
      --buttonBackgroundLight: var(--black);
      --buttonBackgroundDark: #4C2A8D;
      --emailLightBackground: #f6f6f6;
      --emailDarkBackground: rgba(98, 84, 170, 0.3);
      --emailLightBorder: #D8D8D8;
      --emailDarkBorder: #4C2A8D;
      --selectColot: var(--white);
      --selectLightBackground: var(--black);
      --selectDarkBackground: #4C2A8D;
      --starsLightColor: var(--black);
      --starsDarkColor: #7031C0;
      --cardLightBackground: var(--white);
      --cardDarkBackground: #1E1A32;
      --iconsLightColorAndButtonBorder: var(--black);
      --iconsDarkColorAndButtonBorder: #7031C0;
      --figmaLightBg: #333333;
      --figmaDarkBg: #191820;
      --firstBoxShadowLight: rgba(50, 50, 93, 0.25);
      --firstBoxShadowDark: rgba(112, 49, 192, 0.25);
      --secondBoxShadowLight: rgba(0, 0, 0, 0.3);
      --secondBoxShadowDark: rgba(112, 49, 192, 0.3);
      --navbarBoxShadow: rgba(0, 0, 0, 0.1);
      --tooltipFirstShdowLight: rgba(0, 0, 0, 0.16);
      --tooltipFirstShdowDark: rgba(112, 49, 192, 0.3);
      --tooltipSecondShdowLight: rgba(0, 0, 0, 0.23);
      --tooltipSecondShdowDark: rgba(112, 49, 192, 0.37);
      --errorColorLight: #dedee3;
      --errorColorDark: #16141F;
      --errorNumberColorLight: #16141F;
      --errorNumberColorDark: #4C2A8D;

  }

  * {
  box-sizing: border-box;
  };


  html {
    position: relative;
    overflow-y: auto;
  }

  body {
    color: var(--black);
    background-color: ${({ theme }) => theme.bodyBackground};
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    margin: 0;
  }

  a, a:visited {
    text-decoration: none;
  }

  button{
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  .gatsby-image-wrapper img[src*=base64], .gatsby-resp-image-background-image {
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

`;

export default GlobalStyles;
