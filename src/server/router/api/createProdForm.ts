import { validationSchema } from '../../../pages/admin/Add'
import { createProtectedRouter } from '../protectedCtx'

export const createProdForm = createProtectedRouter()
    .query('view', {
        async resolve({ ctx }) {
            try {
                return await ctx.prisma.product.findMany()
            } catch (error) {
                console.log(error)
            }
        },
    })
    .mutation('add', {
        input: validationSchema,
        async resolve({ input, ctx }) {
            try {
                await ctx.prisma.product.create({
                    data: {
                        currency: 'EUR',
                        price_id: Math.random().toString(),
                        sku_id: Math.random().toString(),
                        misure: input.misure,
                        sku: Math.random().toString(),
                        image: input.image,
                        name: input.name,
                        description: input.description,
                        price: input.price,
                        quantity: input.quantity,
                        design: input.design,
                        material: input.material,
                    },
                })
            } catch (error) {
                console.log(error)
            }
        },
    })
