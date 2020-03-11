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
  `;

// if I want to add gradient background
// background-image: ${({ theme }) => theme.gradient};
