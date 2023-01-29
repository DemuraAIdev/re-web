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