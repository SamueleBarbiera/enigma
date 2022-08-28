import { validationSchema } from '../../../pages/admin/AddProd'
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
                        image: input.imageUrl,
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
