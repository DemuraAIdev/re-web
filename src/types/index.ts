export interface Conta {
    children: React.ReactNode;
}

export interface CustomLinkType {
    href: string, children: React.ReactNode, className?: string, showIcon?: boolean, [key: string]: any
}