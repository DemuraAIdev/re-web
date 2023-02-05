import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { Conta } from ".";

export interface CustomLinkType extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    href: string;
    showIcon?: boolean;
    [key: string]: unknown
}

export type TocHeading = {
    value: string;
    depth: number;
    url: string;
}

export interface TOCInlineProps extends Conta {
    toc: TocHeading[];
    indentDepth?: number;
    fromHeading?: number;
    toHeading?: number;
    asDisclosure?: boolean;
    exclude?: string | string[];
}
export interface FallbackData {
    id: string;
    body: any;
    created_by: string;
    updated_at: string;
}

export type AuthorFrontMatter = {
    layout?: string
    name: string
    avatar: string
    occupation: string
    company: string
    email: string
    twitter: string
    linkedin: string
    github: string
}