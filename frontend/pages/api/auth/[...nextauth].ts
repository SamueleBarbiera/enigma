/* eslint-disable import/no-anonymous-default-export */
import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'
//import axios from 'axios'

export const options: NextAuthOptions = {
    providers: [
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
        signIn: '/Login',
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
                console.log(token)
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
