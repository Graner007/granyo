import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/valentine.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
