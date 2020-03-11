import { createGlobalStyle } from "styled-components";
// TODO: edit fonts
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Sriracha&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Oswald|Ubuntu&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Bitter&display=swap');
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    font-family: 'Bitter', serif;
  }

  blockquote {
    padding: 0 1em;
    color: ${({ theme }) => theme.hover};
    border-left: 0.25em solid #ddd;
    background: transparent;
  }

  @font-face{
    font-family: 'JetBrains Mono';
    src: url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/eot/JetBrainsMono-Regular.eot') format('embedded-opentype'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff2/JetBrainsMono-Regular.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff/JetBrainsMono-Regular.woff') format('woff'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/ttf/JetBrainsMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  code {
    font-family: 'JetBrains Mono';
  }

 pre:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


  }
  `;

// if I want to add gradient background
// background-image: ${({ theme }) => theme.gradient};
