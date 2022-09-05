/* eslint-disable @typescript-eslint/require-await */
// src/server/router/context.ts
import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { Session, unstable_getServerSession as getServerSession } from 'next-auth'
import { authOptions as nextAuthOptions } from '../../pages/api/auth/[...nextauth]'
import { prisma } from '../db/client'

interface CreateContextOptions {
    session: Session | null
}

export const createContextInner = async (opts: CreateContextOptions) => {
    return {
        session: opts.session,
        prisma,
    }
}

export const createContext = async (opts: trpcNext.CreateNextContextOptions) => {
    const session = await getServerSession(opts.req, opts.res, nextAuthOptions)

    return await createContextInner({
        session,
    })
}

type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>()
