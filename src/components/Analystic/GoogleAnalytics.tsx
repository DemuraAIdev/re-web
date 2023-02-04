import Script from 'next/script'
import { Analytics } from '@/config/Analystic'

const GAScript = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${Analytics.googleAnalytics.trackingId}`}
            />

            <Script strategy="lazyOnload" id="ga-script">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${Analytics.googleAnalytics.trackingId}', {
              page_path: window.location.pathname,
            });
        `}
            </Script>
        </>
    )
}

export default GAScript