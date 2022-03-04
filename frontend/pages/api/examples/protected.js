// This is an example of to protect an API route
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'

export default async (req, res) => {
    const session = await getSession({ req })
    //const { data: token } = useSession()

    if (session) {
        res.send({
            content: 'This is protected content. You can access this content because you are signed in.',
        })
        /*try {
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
        }*/
    } else {
        res.send({
            error: 'You must be signed in to view the protected content on this page.',
        })
    }
}
