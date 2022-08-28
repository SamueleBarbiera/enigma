/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Prisma, PrismaClient } from '@prisma/client'
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

prisma.$on('query', (e: Prisma.QueryEvent) => {
    console.log('Query: ' + e.query)
    console.log('Duration: ' + e.duration + 'ms')
})

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma
}

export default prisma
