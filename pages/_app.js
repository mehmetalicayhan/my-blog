import App from "next/app";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Providers from "../components/theming/Providers";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );
  }
}
