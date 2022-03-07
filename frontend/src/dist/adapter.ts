import { Profile, Session } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import { User } from 'next-auth'
import { client } from '@sanity/client'
export declare const SanityAdapter: Adapter<
    client,
    never,
    User & {
        id: string
    },
    Profile,
    Session
>
