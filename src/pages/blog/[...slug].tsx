import PageTitle from "@/components/PageTitle";
import generateRss from "@/lib/generate-rss";
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from "@/lib/mdx";

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