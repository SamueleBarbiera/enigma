import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export const options: NextAuthOptions = {
    providers: [
        /*
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'test@test.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const bearer = JSON.parse(JSON.stringify(`${process.env.STRAPI_TOKEN}`))
                const data = {
                    identifier: credentials.email,
                    password: credentials.password,
                }
                console.log('R/W Token ---> ' + bearer + '\n' + JSON.stringify(data))
                try {
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
                        {
                            identifier: credentials.email,
                            password: credentials.password,
                        },

                        {
                            headers: {
                                'Content-Type': 'application/json',
                                Authentication:
                                    'Bearer c119689dbc3e7b5f5f339ab741e9f1d0f3a557001cfef7cd3f70fc593bd48d62a16cf95f08779339eaf565fdc2f9a9232c04e75b534bb0e4401ea3e151a4fb69d280298598d87573ed516e1ef8ade4012123a7bcc498e6f2e2e232a97245dcb79a851dd4cd55b297e4a33146277de11ff7ce65406b41758e42303477491ed737',
                            },
                        }
                    )
                    if (res) {
                        console.log('User profile', res.data.user)
                        console.log('User token\n', res.data.jwt)
                        return res
                    } else {
                        return null
                    }
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
        }),*/
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    pages: {
        signIn: '/signin',
        signOut: '/signin',
        error: '/signin',
    },
    callbacks: {
        async jwt(token, user, account) {
            const isSignIn = user ? true : false
            if (isSignIn) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/${account!.provider}/callback?access_token=${account!?.accessToken}`)
                const data = await response.json()
                token.jwt = data?.jwt
                token.id = data.user?.id
                token.username = data.user?.username
                token.email = data.user?.email
            } else {
                console.log('ERROR USER RES SESSION')
            }
            return token
        },

        async session(session, user) {
            session.jwt = user.jwt
            session.id = user.id
            return session
        },
    },
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
