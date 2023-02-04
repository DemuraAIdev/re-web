import NextImage, { ImageProps } from 'next/image'
import React from 'react'
const Image = ({ ...rest }: ImageProps) => {
    const [isLoading, setLoading] = React.useState(true)
    return (

        <div className="relative">
            {isLoading && (
                <div className="absolute inset-0 flex">
                    <svg
                        className="animate-spin h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                        />
                    </svg>
                </div>
            )}
            <NextImage
                {...rest}
                onLoad={() => setLoading(false)}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
            />
        </div>
    )
}

export default Image