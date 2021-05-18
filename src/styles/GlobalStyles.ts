import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF4949;
        --black: #000;
        --yellow: #ffc600;
        --white: #fff;
        --grey: #efefef;
    }

    /* roboto-regular - latin */
    @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/roboto-v27-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../assets/fonts/roboto-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../assets/fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../assets/fonts/roboto-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../assets/fonts/roboto-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/roboto-v27-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
    }

   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    };


  html {
    background-color: var(--white);
    position: relative;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--black) var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: var(--black);
    font-size: 14px;
    line-height: 18px;
    max-width: 1280px;
    padding: 0 48px;
    margin: 0 auto;
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
    background: var(--white);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--black) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
 
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
