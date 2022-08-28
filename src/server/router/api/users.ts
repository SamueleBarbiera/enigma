import { z } from 'zod'
import { createProtectedRouter } from '../protectedCtx'

export const users = createProtectedRouter()
    .query('view', {
        async resolve({ ctx }) {
            try {
                return await ctx.prisma.user.findMany()
            } catch (error) {
                console.log(error)
            }
        },
    })
    .mutation('delete', {
        input: z.object({
            id: z.string().cuid(),
        }),
        async resolve({ input, ctx }) {
            const { id } = input
            await ctx.prisma.user.delete({ where: { id } })
            return {
                id,
            }
        },
    })
