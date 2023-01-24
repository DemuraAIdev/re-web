import type { Conta } from "@/types"
export default function Container({ children }: Conta) {
    return (
        <div className="mx-auto flex w-full max-w-md flex-col gap-10 px-4 sm:gap-14 sm:px-4 md:max-w-2xl md:px-0 xl:w-screen xl:max-w-2xl xl:px-0">
            {children}
        </div>
    )
}