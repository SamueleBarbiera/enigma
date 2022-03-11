import { CredentialsProvider } from 'next-auth/providers'
import { SanityClient } from '@sanity/client'
declare type CredentialssanityClient = ReturnType<CredentialsProvider>
export declare const signUpHandler: (client: SanityClient) => (req: any, res: any) => Promise<void>
export declare const SanityCredentials: (client: SanityClient) => CredentialssanityClient
export {}
