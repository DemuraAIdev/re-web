import type { FrontMatter } from "@/lib/mdx"
import Tag from "./Tag";
import Link from "./CustomLink";

const MAX_DISPLAY = 2;
export default function LatestBlog({ posts }: { posts: FrontMatter[] }) {
    return (
        <>
            <ul className="grid grid-cols-1 divide-y">
                {!posts.length && "No posts found."}
                {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                    const { slug, date, title, summary, tags } = frontMatter;
                    return (
                        <li
                            key={slug}
                            className="mt-8 transform animate-text rounded-xl bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] p-[5px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none "
                        >
                            <div className="flex h-full flex-col justify-between  rounded-lg bg-[#F9F6EE] p-8 transition dark:bg-[#111010] ">
                                <article>
                                    <div className="space-y-2  xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime={date}>{new Date(date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                                </time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-3">
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                        <Link
                                                            href={`/blog/${slug}`}
                                                            className="text-gray-900 dark:text-gray-100"
                                                        >
                                                            {title}
                                                        </Link>
                                                    </h2>
                                                    <div className="flex flex-wrap">
                                                        {tags.map((tag) => (
                                                            <Tag key={tag} text={tag} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {posts.length > MAX_DISPLAY && (
                <div className="mt-5 flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/blog"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="all posts"
                    >
                        All Posts &rarr;
                    </Link>
                </div>
            )}
        </>
    )
}