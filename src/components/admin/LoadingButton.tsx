import React from 'react'
import Spinner from './Spinner'

interface LoadingButtonProps {
    loading: boolean
    btnColor?: string
    textColor?: string
    children: React.ReactNode
}

export const LoadingButton = ({
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
            {loading ? (
                <div className="flex items-center gap-3">
                    <Spinner width={5} height={5} color={'bg-blue-600'} bgColor={'bg-blue-900'} />
                    <span className="text-slate-500">Loading...</span>
                </div>
            ) : (
                <span className={`${textColor}`}>{children}</span>
            )}
        </button>
    )
}
