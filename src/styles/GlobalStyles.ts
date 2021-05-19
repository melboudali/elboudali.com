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
    background: var(white);
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
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
