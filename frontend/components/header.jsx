import Link from 'next/link'
import { signIn, signOut, useSession, accessToken } from 'next-auth/react'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
    const { data: session, status } = useSession()

    return (
        <header>
            <div className="inline-block min-h-2 w-full">
                {!session && (
                    <>
                        <span className=" pt-4 mx-6 z-10 overflow-hidden inline leading-6 text-ellipsis">You are not signed in</span>
                        <a
                            href={`/api/auth/callback?access_token=${accessToken}`}
                            className="float-right mr-1 font-medium border-1 text-xs  leading-tight p-3 relative z-20"
                            onClick={(e) => {
                                e.preventDefault()
                                signIn()
                            }}
                        >
                            Sign in
                        </a>
                    </>
                )}
                {session?.user && (
                    <>
                        <img className="rounded-full w-12" src={`${session.user.image}`} />
                        <span className="pt-0 ml-6">
                            <small>Signed in as</small>
                            <br />
                            <strong>{session.user.email ?? session.user.name}</strong>
                        </span>
                        <a
                            href={`/api/auth/signout`}
                            className="float-right -mr-1 text-medium border leading-6 p-3 relative z-20"
                            onClick={(e) => {
                                e.preventDefault()
                                signOut()
                            }}
                        >
                            Sign out
                        </a>
                    </>
                )}
            </div>
            <nav>
                <div className="mb-6 inline-flex space-x-4">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/client">
                        <a>Client</a>
                    </Link>
                    <Link href="/protected">
                        <a>Protected</a>
                    </Link>
                    <Link href="/api-example">
                        <a>API</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
