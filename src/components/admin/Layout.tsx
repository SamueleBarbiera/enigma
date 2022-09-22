import { ReactNode } from 'react'
import AdminHeader from '../layout/AdminHeader'
import Footer from '../layout/Footer'
import Sidebar from './Sidebar'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex h-screen w-screen flex-col ">
            <AdminHeader />
            <div className="flex h-screen flex-1">
                <Sidebar />
                <div className="h-screen flex-auto lg:flex">
                    <div className="m-5">{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
