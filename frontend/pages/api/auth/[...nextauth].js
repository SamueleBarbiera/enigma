import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    
    session: {
        jwt: true,
    },
    jwt: {
        encryption: true,
    },
    
    database: process.env.NEXT_PUBLIC_DATABASE_URL,
    theme: {
        colorScheme: 'light',
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = 'admin'
            return token
        },
    },
})
