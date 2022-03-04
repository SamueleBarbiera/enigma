import Header from './header'
import Registration from './registration'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Registration />
        </>
    )
}
