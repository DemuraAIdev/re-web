import { useEffect, useState } from 'react'
import ScrollTop from './Icons/ScrollTop.svg'
import CommentIcon from './Icons/Comment.svg'

const ScrollTopAndComment = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleWindowScroll = () => {
            if (window.scrollY > 50) setShow(true)
            else setShow(false)
        }

        window.addEventListener('scroll', handleWindowScroll)
        return () => window.removeEventListener('scroll', handleWindowScroll)
    }, [])

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleScrollToComment = () => {
        document.getElementById('comment').scrollIntoView()
    }
    return (
        <div
            className={`fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
        >
            {siteMetadata.comment.provider && (
                <button
                    aria-label="Scroll To Comment"
                    type="button"
                    onClick={handleScrollToComment}
                    className="rounded-lg bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                >
                    <CommentIcon />
                </button>
            )}
            <button
                aria-label="Scroll To Top"
                type="button"
                onClick={handleScrollTop}
                className="rounded-lg bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            >
                <ScrollTop />
            </button>
        </div>
    )
}