// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'
import { createProdForm } from './api/createProdForm'
import { auth } from './api/auth'
import { users } from './api/users'
import { authAdmin } from './api/authAdmin'

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('createProduct.', createProdForm)
    .merge('auth.', auth)
    .merge('authAdmin.', authAdmin)
    .merge('users.', users)

// export type definition of API
export type AppRouter = typeof appRouter
