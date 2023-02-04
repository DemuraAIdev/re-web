import Script from 'next/script'

import { Analytics } from '@/config/Analystic'

const UmamiScript = () => {
    return (
        <>
            <Script
                async
                defer
                data-website-id={Analytics.umami.websiteId}
                src={Analytics.umami.url} // Replace with your umami instance
            />
        </>
    )
}

export default UmamiScript
