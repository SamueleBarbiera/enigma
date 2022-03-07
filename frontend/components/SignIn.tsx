import { useSession, signIn, signOut } from 'next-auth/client'
import Image from 'next/image'

const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 1}`
}

export default function Home() {
    const [session, loading] = useSession()
    if (loading) return <>Loading</>

    if (session) {
        return (
            <div>
                <p>Username: {session.user.name}</p>
                <p>Email: {session.user.email}</p>
                <Image layout="fixed" loader={myLoader} alt="logo" width={50} height={50} className="rounded-full shadow-2xl" src={session.user.image} />
                <button onClick={() => signOut({ redirect: false })}>Sign Out</button>
            </div>
        )
    }

    return <button onClick={() => signIn()}>Sign In</button>
}
