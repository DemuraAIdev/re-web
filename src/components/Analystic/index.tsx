import GA from './GoogleAnalytics'
import Umami from './Umami'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
    // {isProduction && <GA />}
    return (
        <>
            {isProduction && <Umami />}

        </>
    )
}

export default Analytics