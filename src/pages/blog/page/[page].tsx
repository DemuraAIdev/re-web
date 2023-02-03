import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { FrontMatter } from '@/lib/mdx'
const POSTS_PER_PAGE = 5;

export const getStaticPaths: GetStaticPaths<{ page: string }> = async () => {
    const totalPosts = await getAllFilesFrontMatter('blog')
    const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: (i + 1).toString() },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{
    posts: FrontMatter[]
    initialDisplayPosts: FrontMatter[]
    pagination: { currentPage: number; totalPages: number }
}> = async (context) => {
    const {
        params: { page },
    } = context as { params: { page: string } }
    const posts = await getAllFilesFrontMatter('blog')
    const pageNumber = parseInt(page as string)
    const initialDisplayPosts = posts.slice(
        POSTS_PER_PAGE * (pageNumber - 1),
        POSTS_PER_PAGE * pageNumber
    )
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    }

    return {
        props: {
            posts,
            initialDisplayPosts,
            pagination,
        },
    }
}

export default function PostPage({
    posts,
    initialDisplayPosts,
    pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <PageSEO title={"Blog - Vahry Iskandar"} description={"Page 1"} />
            <ListLayout
                posts={posts}
                initialDisplayPosts={initialDisplayPosts}
                pagination={pagination}
                title="All Posts"
            />
        </>
    )
}
