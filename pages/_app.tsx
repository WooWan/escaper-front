import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import Layout from "../components/layout/Layout";
import {ThemeProvider} from "styled-components";
import {theme} from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp
