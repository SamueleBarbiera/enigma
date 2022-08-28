import { ReactNode } from 'react'
import AdminHeader from '../layout/AdminHeader'
import Footer from '../layout/Footer'
import Sidebar from './Sidebar'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <AdminHeader />
            <Sidebar />
            <div className="flex h-screen grow">
                <div className="m-5">{children}</div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
