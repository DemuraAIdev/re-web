import { FrontMatter } from "@/lib/mdx";
import GiscusComponent from "./Giscus"


const Comments = ({ frontMatter }: { frontMatter: FrontMatter }) => {
    // pathname / url 
    let term: string = "pathname";
    /** 
    switch (
    siteMetadata.comment.giscusConfig.mapping
    ) {
        case "pathname":
            term = frontMatter.slug;
            break;
        case "url":
            term = window.location.href;
            break;
        case "title":
            term = frontMatter.title;
            break;
    }
    */
    return (
        <>
            <GiscusComponent mapping={term} />
        </>
    );
};

export default Comments;
