import { PageSEO } from "@/components/SEO";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { InferGetStaticPropsType } from "next";
import ListLayout from "@/layouts/ListLayout";

const POSTS_PER_PAGE = 5;

export async function getStaticProps({ }) {
    const posts = await getAllFilesFrontMatter("blog");
    const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    };

    return {
        props: {
            posts,
            initialDisplayPosts,
            pagination,
        },
    };
}
export default function Blog({
    posts,
    initialDisplayPosts,
    pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <PageSEO
                title={`Blog - Vahry Iskandar`}
                description="Vahry Iskandar's blog. I write about web development, programming, and other things that I find interesting."
            />
            <ListLayout
                posts={posts}
                initialDisplayPosts={initialDisplayPosts}
                pagination={pagination}
                title="Blog 📝"
            />
        </>
    );
}