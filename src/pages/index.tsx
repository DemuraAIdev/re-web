import Link from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'
import Typed from '@/components/Typed.jsx'
import { getAllFilesFrontMatter } from '@/lib/mdx';
import LatestBlog from '@/components/LatestBlog';
import type { FrontMatter } from '@/lib/mdx';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  console.log("%cStop! want code?", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
  console.log("https://github.com/DemuraAIdev")
  return { props: { posts } };
}


export default function Home({ posts }: { posts: FrontMatter[] }) {
  return (
    <>
      <PageSEO title="Vahry Iskandar" description="Home page of Abdul Vaiz Vahry Iskandar" />
      <div className="space-y-2 pt-5 pb-8 md:space-y-5 md:h-screen lg:h-sreen md:lg:mt-20 lg:mt-20">
        <div
          className="animate-text bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA]
            bg-clip-text
            text-transparent
            "
        >
          <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-7xl font-extrabold leading-none sm:my-10">
            Abdul Vaiz Vahry Iskandar
          </h1>
        </div>
        <div className="border-dotted rounded-lg border-2 border-gray-500 p-5">
          <Typed />
          <p className="text-lg leading-7 text-black dark:text-gray-400">
            I am a website developer, bot, graphic designer, and nft artist. I learned to make a website from 2019
          </p>
        </div>
      </div>
      <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9 umami--click--Latest-posts">
        Latest blog posts
      </h2>
      <LatestBlog posts={posts} />

    </>
  )
}
