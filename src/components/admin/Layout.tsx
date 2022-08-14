import { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex h-screen flex-row justify-start">
            <Sidebar />
            <div className="flex-1 bg-primary p-4 text-white">{children}</div>
        </div>
    )
}

export default Layout
