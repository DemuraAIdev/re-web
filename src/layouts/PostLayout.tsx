import Link from "@/components/CustomLink";
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from "@/components/SEO";
import Tag from '@/components/Tag'
import ScrollTopAndComment from '@/components/STC.jsx'
import { ReactNode } from 'react'
import { FrontMatter } from "@/lib/mdx";
import Container from "@/components/Container";
import Comment from "@/components/Comments"
import Image from "@/components/Image";

const editUrl = (fileName: string) => `https://github.com/DemuraAIdev/re-web/blob/master/data/blog/${fileName}`;
const discussUrl = (slug: string) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
        `https://vahryiskandar.my.id/blog/${slug}`
    )}`;

const postDateTemplate: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

interface Props {
    frontMatter: FrontMatter
    next?: { slug: string; title: string }
    prev?: { slug: string; title: string }
    children: ReactNode
}

export default function PostLayout({ frontMatter, next, prev, children }: Props) {
    const { slug, fileName, date, title, tags, readingTime } = frontMatter;
    const roundedReadingMinutes = Math.round(readingTime);
    return (
        <Container>
            <BlogSEO
                url={`https://vahryiskandar.my.id/blog/${slug}`}
                {...frontMatter}
            />
            <ScrollTopAndComment />
            <article>
                <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                    <header className="pt-6 xl:pb-6">
                        <div className="space-y-1 text-center">
                            <dl className="space-y-10">
                                <div>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time dateTime={date}>
                                            {new Date(date).toLocaleDateString(
                                                "en-US",
                                                postDateTemplate
                                            )}
                                        </time>
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <PageTitle>{title}</PageTitle>
                            </div>
                            <span className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                                {roundedReadingMinutes}{" "}
                                {roundedReadingMinutes == 1 ? " minute " : " minutes " + " read"}
                            </span>
                        </div>
                    </header>
                    <div className=" xl:pb-0">
                        <div className="prose max-w-none pt-10 pb-3 dark:prose-dark">
                            {children}
                        </div>
                        <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                            {tags && (
                                <div className="py-4 xl:py-8">
                                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                        Tags
                                    </h2>
                                    <div className="flex flex-wrap">
                                        {tags.map((tag) => (
                                            <Tag key={tag} text={tag} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-4 xl:dark:border-gray-700">
                            <dt className="sr-only">Authors</dt>
                            <dd>
                                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                    <li
                                        className="flex items-center space-x-2"
                                        key={"vahryiskandar"}
                                    >
                                        <Image
                                            src={"/static/images/avatar.jpg"}
                                            width="38"
                                            height="38"
                                            alt="avatar"
                                            className="h-10 w-10 rounded-full"
                                        />
                                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                            <dt className="sr-only">Name</dt>
                                            <dd className="text-gray-900 dark:text-gray-100">
                                                Vahry Iskandar
                                            </dd>
                                            <dt className="sr-only">Twitter</dt>
                                            <dd>
                                                <Link
                                                    href={"https://twitter.com/Abdulvaiz2"}
                                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                >
                                                    @Abdulvaiz2

                                                </Link>
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                            <Link href={discussUrl(slug)} rel="nofollow">
                                {"Discuss on Twitter"}
                            </Link>
                            {` • `}
                            <Link href={editUrl(fileName)}>{"View on GitHub"}</Link>
                        </div>

                        <Comment />
                    </div>
                    <footer>
                        <div className="pt-4 xl:pt-8">
                            <Link
                                href="/blog"
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                                &larr; Back to the blog
                            </Link>
                        </div>
                    </footer>
                </div>
            </article>
        </Container>
    )
}