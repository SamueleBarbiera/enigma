import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'
import { SanityAdapter, SanityCredentials } from '../../../src/'
import { config } from '../../libs/sanity'

const options: NextAuthOptions = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Providers.Instagram({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
        }),
        SanityCredentials(config),
    ],

    session: {
        jwt: true,
    },
    adapter: SanityAdapter(config),
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
