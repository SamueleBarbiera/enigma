import { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="flex flex-auto">
                <Sidebar />
                <div className="grow">
                    <div className="m-5">{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
