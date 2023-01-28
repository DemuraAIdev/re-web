import PageTitle from "@/components/PageTitle";
import generateRss from "@/lib/generate-rss";
import fs from "fs";
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from "@/lib/mdx";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXLayoutRenderer } from "@/components/MDXCompo";

export async function getStaticPaths() {
    const posts = getFiles("blog");
    return {
        paths: posts.map((p) => ({
            params: {
                slug: formatSlug(p).split("/"),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const allPosts = await getAllFilesFrontMatter('blog')
    const post = await getFileBySlug("blog", params?.slug as string);
    const rss = generateRss(allPosts)
    fs.writeFileSync(`./public/feed.xml`, rss)

    return { props: { post } };

}
const DEFAULT_LAYOUT = "PostLayout";

export default function Blog({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { mdxSource, toc, frontMatter } = post;
    return (
        <>
            {!frontMatter.draft ? (
                <MDXLayoutRenderer
                    layout={frontMatter.layout || DEFAULT_LAYOUT}
                    toc={toc}
                    mdxSource={mdxSource}
                    frontMatter={frontMatter}
                />
            ) : (
                <div className="mt-24 text-center">
                    <PageTitle>
                        Under Construction{" "}
                        <span role="img" aria-label="roadwork sign">
                            🚧
                        </span>
                    </PageTitle>
                </div>
            )}
        </>
    );
}