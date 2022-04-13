import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    title?: string
}

const Layout = ({ children }: Props) => (
    <>
        <div className="flex items-center justify-center p-12">{children}</div>
    </>
)

export default Layout
