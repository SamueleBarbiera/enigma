import { Product } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { createProtectedRouter } from '../protectedCtx'

export const byId = createProtectedRouter().query('view', {
    input: z.object({
        id: z.string().cuid(),
    }),
    async resolve({ input, ctx }) {
        try {
            const post: Product | null = await ctx.prisma.product.findUnique({ where: { id: input.id } })
            if (!post) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No post with id '${input.id}'`,
                })
            }
            return post
        } catch (error) {
            console.log(error)
        }
    },
})
