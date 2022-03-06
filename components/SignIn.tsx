import { useSession, signIn, signOut } from 'next-auth/client'

export default function Home() {
    const [session, loading] = useSession()
    if (loading) return <div className="spinner"></div>

    if (session) {
        return (
            <div>
                <p>Username: {session.user.name}</p>
                <p>Email: {session.user.email}</p>
                <img className="w-12 rounded-full bg-white shadow-2xl" src={session.user.image} />
                <button onClick={() => signOut({ redirect: false })}>Sign Out</button>
            </div>
        )
    }

    return <button onClick={() => signIn('google')}>Sign In</button>
}
