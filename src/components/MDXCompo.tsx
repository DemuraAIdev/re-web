import Image from "next/image";
import { getMDXComponent, ComponentMap } from "mdx-bundler/client";
import Link from "./CustomLink";
import TOCInline from "./TOCInline";
import Pre from "./Pre";
import PostLayout from "@/layouts/PostLayout";
import { useMemo } from "react";

export const MDXComponents: ComponentMap = {
    TOCInline,
    Image,
    // @ts-expect-error
    a: Link,
    pre: Pre,
    wrapper: PostLayout,
};

export const MDXLayoutRenderer = ({
    layout,
    mdxSource,
    ...rest
}: {
    layout: any;
    mdxSource: string;
    [key: string]: any;
}) => {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

    return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
