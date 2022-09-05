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
                console.log('🚀 ~ file: authAdmin.ts ~ line 12 ~ resolve ~ ERROR', error)
            }
        },
    })
    .middleware(async ({ ctx, next }) => {
        // Any query or mutation after this middleware will raise
        // an error unless there is a current session
        if (!ctx.session || ctx.session.user.role != 'ADMIN') {
            console.log('🚀 ~ file: authAdmin.ts ~ line 23 ~ .middleware ~ session', ctx.session?.user.role)
            throw new TRPCError({ code: 'UNAUTHORIZED' })
        }
        return next()
    })
