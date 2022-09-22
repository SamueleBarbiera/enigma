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
                        color: {
                            create: {
                                purple: input.colors.purple,
                                red: input.colors.red,
                                orange: input.colors.orange,
                                yellow: input.colors.yellow,
                                black: input.colors.black,
                                white: input.colors.white,
                                pink: input.colors.pink,
                                blue: input.colors.blue,
                                sky: input.colors.sky,
                                teal: input.colors.teal,
                                green: input.colors.green,
                                gray: input.colors.gray,
                            },
                        },
                        size: {
                            create: {
                                xxs: input.sizes.xxs,
                                xs: input.sizes.xs,
                                s: input.sizes.s,
                                m: input.sizes.m,
                                l: input.sizes.l,
                                xl: input.sizes.xl,
                                xxl: input.sizes.xxl,
                                xxxl: input.sizes.xxxl,
                            },
                        },
                    },
                    include: {
                        color: true,
                        size: true,
                    },
                })
            } catch (error) {
                console.log(error)
            }
        },
    })
