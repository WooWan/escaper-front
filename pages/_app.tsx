import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/theme";
import { store } from "../store/config";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
