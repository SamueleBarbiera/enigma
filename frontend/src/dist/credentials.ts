import { CredentialsProvider } from 'next-auth/providers'
import { client } from '@sanity/client'
declare type CredentialssanityClient = ReturnType<CredentialsProvider>
export declare const signUpHandler: (client: client) => (req: any, res: any) => Promise<void>
export declare const SanityCredentials: (client: client) => CredentialsConfig
export {}
