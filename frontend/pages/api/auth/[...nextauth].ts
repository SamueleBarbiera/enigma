import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { useEffect } from 'react'

export const options: NextAuthOptions = {
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'test@test.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    if (typeof window !== 'undefined') {
                        // Perform localStorage action
                        const item = localStorage.getItem('key')
                    }
                    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
                        identifier: credentials.email,
                        password: credentials.password,
                    })
                    if (data) {
                        return data
                    } else {
                        return null
                    }
                } catch (e) {
                    console.log('caught error', e)
                    return null
                }
            },
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],

    pages: {
        signIn: '/Login',
    },
    callbacks: {
        async jwt(token, user) {
            const isSignIn = user ? true : false
            if (isSignIn) {
                token.jwt = user?.jwt
                token.id = user?.id
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
