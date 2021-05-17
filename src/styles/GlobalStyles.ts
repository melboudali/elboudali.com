import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF4949;
        --black: #000;
        --yellow: #ffc600;
        --white: #fff;
        --grey: #efefef;
    }

   * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
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
    color: var(--black);
    font-size: 14px;
    line-height: 18px;
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
