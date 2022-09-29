import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default MyApp;
