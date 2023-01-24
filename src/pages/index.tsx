import { useTheme } from 'next-themes'
import Link from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <PageSEO title="Vahry Iskandar" description="Home page of Abdul Vaiz Vahry Iskandar" />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
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
        <div>
          <p className="text-lg leading-7 text-black dark:text-gray-400">
            I am a website developer, bot, graphic designer, and nft artist. I learned to make a website from 2019
            <Link
              className=" bg-cust1 umami--home--navigation ml-2 font-medium leading-6"
              href="/menu"
            >
              Navigation →
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
