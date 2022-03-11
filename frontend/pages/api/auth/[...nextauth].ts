import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'
import { SanityAdapter, SanityCredentials } from '../../../src/'
import { config } from '../../libs/sanity'

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
        SanityCredentials(config),
    ],

    pages: {
        signIn: '/Login',
    },
    session: {
        jwt: true,
    },
    adapter: SanityAdapter(config),
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
