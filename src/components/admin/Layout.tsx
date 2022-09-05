import { ReactNode } from 'react'
import AdminHeader from '../layout/AdminHeader'
import Footer from '../layout/Footer'
import Sidebar from './Sidebar'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="h-screen w-screen">
            <AdminHeader />
            <Sidebar />
            <div className="flex h-min flex-col items-end justify-end">
                <div className="m-5">{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
