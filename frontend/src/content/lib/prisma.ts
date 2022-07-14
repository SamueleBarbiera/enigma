/* eslint-disable no-undef */
import { PrismaClient } from '@prisma/client'

// Prevent multiple instances of Prisma Client in development
declare const global: typeof globalThis & { prisma?: PrismaClient }

export const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        'info',
        'warn',
        'error',
    ],
})

prisma.$on('query', (e: any) => {
    console.log('Query: ' + e.query)
    console.log('Duration: ' + e.duration + 'ms')
})

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
