import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/valentine.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <SessionProvider session={pageProps.session}>
      <Head><title>Love you</title></Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
