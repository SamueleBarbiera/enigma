import { createProtectedRouter } from '../protectedCtx'

export const prodCons = createProtectedRouter().query('view', {
    async resolve({ ctx }) {
        try {
            return await ctx.prisma.product.findMany({
                take: -4,
            })
        } catch (error) {
            console.log(error)
        }
    },
})
