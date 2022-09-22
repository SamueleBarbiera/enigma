import { ReactNode } from 'react'

interface LoadingButtonProps {
    loading: boolean
    textColor?: string
    children: ReactNode
}

export const ButtonForm = ({ textColor = 'text-white', children, loading = false }: LoadingButtonProps) => {
    return (
        <button
            type="submit"
            className={`btn m-2 flex w-full justify-center rounded-lg border-none bg-beige-400 font-semibold text-beige-100 outline-none ${
                loading ? 'bg-[#ccc]' : ''
            }`}
        >
            <span className={`${textColor}`}>{children}</span>
        </button>
    )
}
