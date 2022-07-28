import { DefaultProfile, DefaultSession } from 'next-auth'
declare module 'next-auth' {
    interface Session {
        user: {
            /** The user's postal address. */
            role: string
        } & DefaultSession['user']
    }
    // interface User {}
    interface Token {
        refreshToken: string
        jwt: string
        access_token: string
        id: string
        accessTokenExpires: string
    }
    interface Account {
        provider: string
        expires_in: string
        access_token: string
        refreshToken: string
    }
    interface Profile {
        profile: { picture: string } & DefaultProfile['image']
    }
}
