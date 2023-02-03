import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="AVVI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AVVI" />
        <meta name="description" content="vahryiskandar website official" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/static/favicon/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/touch-icon-iphone-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/app.webmanifest" />
        <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/static/favicon/favicon.ico" />

        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <body className="antialiased bg-[#F9F6EE] dark:bg-[#111010] font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
