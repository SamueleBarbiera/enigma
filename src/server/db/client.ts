// src/server/db/client.ts
import { PrismaClient } from '@prisma/client'
import { env } from '../../env/server.mjs'

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined
}

export const prisma =
    global.prisma ??
    new PrismaClient({
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

// prisma.$on('beforeExit', (e) => {
//     console.log('Query: ', e.query)
//     console.log('Duration: ', e.duration, ' ms')
// })

if (env.NODE_ENV !== 'production') {
    global.prisma = prisma
}
