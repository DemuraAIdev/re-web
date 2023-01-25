import { TagSEO } from "@/components/SEO";
import { FrontMatter } from "@/lib/mdx";
import ListLayout from "@/layouts/ListLayout";
import { getAllTags } from "@/lib/tags";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import kebabCase from "@/lib/utils/kebabCase";
import generateRss from "@/lib/generate-rss";
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths({ }) {
    const tags = await getAllTags('blog')

    return {
        paths: Object.keys(tags).map((tag) => ({
            params: {
                tag,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
    const allPosts = await getAllFilesFrontMatter('blog')
    const filteredPosts = allPosts.filter(
        (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
    )

    // rss
    if (filteredPosts.length > 0) {
        const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
        const rssPath = path.join(root, 'public', 'tags', params.tag)
        fs.mkdirSync(rssPath, { recursive: true })
        fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
    }

    return { props: { posts: filteredPosts, tag: params.tag } }
}


export default function Tag({ posts, tag }: { posts: FrontMatter[], tag: any }) {
    const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
    return (
        <>
            <TagSEO
                title={`${tag} - Vahry Iskandar`}
                description={`${tag} tags - Vahry Iskandar`}
            />
            <ListLayout posts={posts} title={"Tag: " + title} />
        </>
    );
}
