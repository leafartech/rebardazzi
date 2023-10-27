import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
    classNameS?: string
}

export default function Section({ children, className, classNameS }: SectionProps) {
    return (
        <section className={`relative w-full flex justify-center px-4 sm:px-0 ${classNameS}`}>
            <div className={`w-full max-w-7xl ${className}`}>
                {children}
            </div>
        </section>
    )
}