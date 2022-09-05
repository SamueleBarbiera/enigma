import { ReactNode } from 'react'

interface LoadingButtonProps {
    loading: boolean
    btnColor?: string
    textColor?: string
    children: ReactNode
}

export const ButtonForm = ({
    textColor = 'text-white',
    btnColor = 'bg-ct-yellow-600',
    children,
    loading = false,
}: LoadingButtonProps) => {
    return (
        <button
            type="submit"
            className={`w-full py-3 font-semibold ${btnColor} flex justify-center rounded-lg border-none outline-none ${
                loading ? 'bg-[#ccc]' : ''
            }`}
        >
            <span className={`${textColor}`}>{children}</span>
        </button>
    )
}
