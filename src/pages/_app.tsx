import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import NavigationBar from '@/components/NavigationBar'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" defaultTheme='system'>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <NavigationBar>
            <Component {...pageProps} />
          </NavigationBar>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
