import App from "next/app";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "../components/theming/Providers";

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
