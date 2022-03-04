// This is an example of to protect an API route
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'
import Header from '../components/header'

export default async function registration() {
    const session = await getSession({ req })
    const { data: token } = useSession()

    try {
        axios.post('http://localhost:3003/api/auth/local/register', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            username: session.user.name,
            email: session.user.email,
        })

        console.log('Well done!')
        console.log('User profile', res.data.user)
        console.log('User token', res.data.jwt)
    } catch (err) {
        console.log('An error occurred:', err.res)
    }
    return (
        <>
            <Header />
            <h1>Registration</h1>
        </>
    )
}
