import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import NavigationBar from '@/components/NavigationBar'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme='system'>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <NavigationBar>
          <Component {...pageProps} />
        </NavigationBar>
      </ThemeProvider>
    </>
  )
}
