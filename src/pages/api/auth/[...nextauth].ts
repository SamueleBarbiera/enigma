/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth, { Session, User } from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import { AppProviders } from 'next-auth/providers'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../content/lib/prisma'
import axios, { AxiosResponse } from 'axios'
import { JWT } from 'next-auth/jwt'

const GOOGLE_AUTHORIZATION_URL =
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    'https://accounts.google.com/o/oauth2/v2/auth?' +
    new URLSearchParams({
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code',
    })

interface Token extends JWT {
    refreshToken: string
    jwt: JWT
    access_token: string | undefined
    id: string
    accessTokenExpires: string | JWT | undefined
    expires_in: string
}

interface Profile {
    sub: string
    name: string
    email: string
    picture: string
}

const refreshAccessToken = async (payload: Token, clientId: string, clientSecret: string) => {
    try {
        const url = new URL('https://accounts.google.com/o/oauth2/token')
        url.searchParams.set('client_id', clientId)
        url.searchParams.set('client_secret', clientSecret)
        url.searchParams.set('grant_type', 'refresh_token')
        url.searchParams.set('refresh_token', payload.refreshToken)

        const response: Response = await fetch(url.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
        })

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const refreshToken: Token = await response.json()

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        // Give a 10 sec buffer
        const now = new Date()
        const accessTokenExpires: number = now.setSeconds(now.getSeconds() + parseInt(refreshToken.expires_in) - 10)
        return {
            ...payload,
            accessToken: refreshToken.access_token,
            accessTokenExpires,
            refreshToken: payload.refreshToken,
        }
    } catch (err) {
        console.error('Error :', err instanceof Error ? err.message : 'Unknown error')

        return {
            ...payload,
            error: 'RefreshAccessTokenError',
        }
    }
}

let ErrorGoogleEnv = false
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET } = process.env
if (
    process.env.NODE_ENV === 'test' ||
    (process.env.NODE_ENV === 'production' && GOOGLE_CLIENT_ID === '') ||
    GOOGLE_CLIENT_SECRET === '' ||
    FACEBOOK_CLIENT_ID === '' ||
    FACEBOOK_CLIENT_SECRET === ''
) {
    ErrorGoogleEnv = true
    throw new Error('⚠️ auth credentials were not added ⚠️')
} else {
    ErrorGoogleEnv = false
}

const providers: AppProviders = []
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (ErrorGoogleEnv) {
    throw new Error('⚠️ auth credentials were not added ⚠️')
} else {
    providers.push(
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID!,
            clientSecret: GOOGLE_CLIENT_SECRET!,
            accessTokenUrl: GOOGLE_AUTHORIZATION_URL,
            profile(profile: Profile) {
                //console.log('🚀 - file: [...nextauth].ts - line 92 - profile - profile', profile)
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                }
            },
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        })
    )
}
//console.log('🚀 ~ file: [...nextauth].ts ~ line 94 ~ providers', providers)

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers,
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        session({ session, user }: { session: Session; user: User }) {
            session.user.role = user.role as string
            //console.log('🚀 - file: [...nextauth].ts - line 113 - session - user', user, session)
            session.id = user.id
            return session
        },
        async jwt({ token, user, account }) {
            const isSignIn = user && account ? true : false
            if (isSignIn) {
                const response: AxiosResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/auth/${account!.provider}/callback?access_token=${account!.access_token}`)

                token.access_token = account?.access_token
                token.accessTokenExpires = account?.expires_in
                token.refreshToken = account?.refresh_token
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                token.jwt = response.data?.jwt
                token.access_token = account?.access_token
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                token.id = response.data.user.id
                //console.log(response.data, token)
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < Number(account?.expires_in)) {
                return token
            }

            // Access token has expired, try to update it
            return await refreshAccessToken(token as Token, String(process.env.GOOGLE_CLIENT_ID), String(process.env.GOOGLE_CLIENT_SECRET))
        },
        redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
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

export default NextAuth(authOptions)
