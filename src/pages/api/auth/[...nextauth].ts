/* eslint-disable indent */
/* eslint-disable import/no-anonymous-default-export */
import NextAuth, { NextAuthOptions } from 'next-auth'
import { AppProviders } from 'next-auth/providers'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../content/lib/prisma'

const GOOGLE_AUTHORIZATION_URL =
    'https://accounts.google.com/o/oauth2/v2/auth?' +
    new URLSearchParams({
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code',
    })

const refreshAccessToken: any = async (payload: any, clientId: string, clientSecret: string) => {
    try {
        const url = new URL('https://accounts.google.com/o/oauth2/token')
        url.searchParams.set('client_id', clientId)
        url.searchParams.set('client_secret', clientSecret)
        url.searchParams.set('grant_type', 'refresh_token')
        url.searchParams.set('refresh_token', payload.refreshToken)

        const response = await fetch(url.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
        })

        const refreshToken = await response.json()

        if (!response.ok) {
            throw refreshToken
        }

        // Give a 10 sec buffer
        const now = new Date()
        const accessTokenExpires = now.setSeconds(now.getSeconds() + parseInt(refreshToken.expires_in) - 10)
        return {
            ...payload,
            accessToken: refreshToken.access_token,
            accessTokenExpires,
            refreshToken: payload.refreshToken,
        }
    } catch (error) {
        console.error('ERR', error)

        return {
            ...payload,
            error: 'RefreshAccessTokenError',
        }
    }
}

let ErrorGoogleEnv = process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production'
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET } = process.env
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !FACEBOOK_CLIENT_ID || !FACEBOOK_CLIENT_SECRET) {
    console.log('⚠️ Google auth credentials were not added ⚠️')
    ErrorGoogleEnv = true
}

const providers: AppProviders = []
if (ErrorGoogleEnv) {
    providers.push(
        CredentialsProvider({
            id: 'google',
            name: 'Mocked Google',
            async authorize(credentials: any) {
                const user = {
                    id: credentials?.name,
                    name: credentials?.name,
                    email: credentials?.name,
                }
                return user
            },
            credentials: {
                name: { type: 'test' },
            },
        })
    )
} else {
    providers.push(
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID!,
            clientSecret: GOOGLE_CLIENT_SECRET!,
            accessTokenUrl: GOOGLE_AUTHORIZATION_URL,
            profile(profile: any) {
                console.log('🚀 - file: [...nextauth].ts - line 92 - profile - profile', profile)
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                } as any
            },
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        })
    )
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers,
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async session({ session, token, user }: any) {
            console.log('🚀 - file: [...nextauth].ts - line 113 - session - user', user, session)
            session.user.role = user.role
            session.jwt = user.jwt
            session.id = user.id
            return session
        },
        async jwt({ token, user, account }: any) {
            const isSignIn = user && account ? true : false
            if (isSignIn) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account!.provider}/callback?access_token=${account!?.access_token}`)
                const data = await response.json()
                console.log('🚀 - file: [...nextauth].ts - line 127 - jwt - data', data)
                ;(token.access_token = account!.access_token), (token.accessTokenExpires = account!.expires_in!), (token.refreshToken = account!.refresh_token), (token.jwt = data.jwt)
                token.access_token = account.access_token
                token.id = data.user.id
                console.log(data, token)
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < (token as any).accessTokenExpires) {
                return token
            }

            // Access token has expired, try to update it
            return await refreshAccessToken(token, String(process.env.GOOGLE_CLIENT_ID), String(process.env.GOOGLE_CLIENT_SECRET))
        },
        async signIn() {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    pages: {
        signIn: '/auth/Login',
    },
    debug: true,
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions)
