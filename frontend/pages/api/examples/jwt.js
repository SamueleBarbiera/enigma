// This is an example of how to read a JSON Web Token from an API route
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET
export default async (req, res) => {
    const token = await getToken({ req, secret, raw: true })
    res.send(JSON.stringify(token, null, 2))
    return token
}
