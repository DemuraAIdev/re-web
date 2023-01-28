import Link from 'next/link'
import ExtLink from './Icons/ExtLink.svg'

export interface CustomLinkType extends React.LinkHTMLAttributes<HTMLAnchorElement> {
    href: string;
    showIcon?: boolean;
}

export default function CustomLink({ href, children, className, showIcon = true, ...rest }: CustomLinkType) {
    const isInternalLink = href && href.startsWith('/')
    const isAnchorLink = href && href.startsWith('#')

    if (isInternalLink || isAnchorLink) {
        return (
            <Link className={className} {...rest} href={href}>
                {children}

            </Link>
        )
    }

    return (
        <Link href={href} target="_blank" rel='noopener noreferrer' className={`items-center ${className ? className : ''}`} {...rest}>
            {children}
            {showIcon && (
                <ExtLink />
            )}

        </Link>
    )
}