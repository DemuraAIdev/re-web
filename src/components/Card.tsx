import Image from "./Image";
import Link from "./CustomLink";

interface CardProp {
    title: string;
    description: string;
    imgSrc?: string;
    href?: string;
}

const Card = ({ title, description, imgSrc, href }: CardProp) => (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: "544px" }}>
        <div className="flex h-full flex-col justify-between rounded-lg border-dotted border-2 border-gray-500 p-5 bg-[#F9F6EE] transition-colors duration-1000 dark:bg-[#111010] hover:scale-[1.03]">
            {imgSrc &&
                (href ? (
                    <Link href={href} aria-label={`Link to ${title}`} showIcon={false}>
                        <Image
                            alt={title}
                            src={imgSrc}
                            className="object-cover object-center md:h-36 lg:h-48"
                            width={544}
                            height={306}
                        />
                    </Link>
                ) : (
                    <Image
                        alt={title}
                        src={imgSrc}
                        className="object-cover object-center md:h-36 lg:h-48"
                        width={544}
                        height={306}
                    />
                ))}
            <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    {href ? (
                        <Link
                            href={href}
                            showIcon={false}
                            aria-label={`Link to ${title}`}
                        >
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h2>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                    {description}
                </p>
                {href && (
                    <Link
                        href={href}
                        showIcon={false}
                        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Link to ${title}`}
                    >
                        Learn more &rarr;
                    </Link>
                )}
            </div>
        </div>
    </div>
);

export default Card;