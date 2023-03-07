import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import Layout from '@/components/core/layout/Layout'
import { store } from '@/store/config'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import type { NextPage } from 'next'

// const isServer = typeof window === 'undefined'
// if (process.env.NODE_ENV === 'development') {
//   if (isServer) {
//     ;(async () => {
//       const { server } = await import('../mocks/server')
//       server.listen()
//     })()
//   } else {
//     ;(async () => {
//       const { worker } = await import('../mocks/browser')
//       worker.start()
//     })()
//   }
// }

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CookiesProvider>
            <Provider store={store}>
              {/* <Layout> */}
              {getLayout(<Component {...pageProps} />)}
              {/* </Layout> */}
            </Provider>
          </CookiesProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp
