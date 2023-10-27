'use client'

import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { ReactNode, useState } from "react"

interface DropdownProps {
    children: ReactNode
    title: string
}

export default function Dropdown({ children, title }: DropdownProps) {
    const [isActived, setIsActived] = useState<boolean>(false)

    return (
        <div className="w-full max-w-lg sub">
            <h4 className="text-white cursor-pointer font-semibold flex items-center justify-start gap-2 py-2 border-b border-zinc-200" onClick={() => setIsActived(!isActived)}>
                <ChevronDownIcon className={`transition h-4 w-4 ${isActived ? 'rotate-0' : 'rotate-90'}`} />
                <span>{title}</span>
            </h4>
            <div className={`p-2 text-sm ${isActived ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div >
    )
}