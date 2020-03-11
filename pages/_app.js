import App from "next/app";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "../components/theming/Providers";
import Seo from "../components/Seo"
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <Seo/>
        <Component {...pageProps} />
      </Providers>
    );
  }
}
