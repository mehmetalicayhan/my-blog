import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    src: url('/fonts/JetBrainsMono-Medium.ttf')
      format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  `;

// if I want to add gradient background
// background-image: ${({ theme }) => theme.gradient};
