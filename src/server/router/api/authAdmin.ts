import { TRPCError } from '@trpc/server'
import { createRouter } from '../context'

export const authAdmin = createRouter()
    .query('next-auth.getAdminSession', {
        async resolve({ ctx }) {
            // The session object is added to the routers context
            // in the context file server side
            try {
                return ctx.session
            } catch (error) {
                console.log(error)
            }
        },
    })
    .middleware(async ({ ctx, next }) => {
        // Any query or mutation after this middleware will raise
        // an error unless there is a current session
        if (ctx.session?.role != 'ADMIN') {
            throw new TRPCError({ code: 'UNAUTHORIZED' })
        }
        return next()
    })
