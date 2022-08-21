// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'
import { createProdForm } from './api/createProdForm'
import { auth } from './api/auth'

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('createProduct.', createProdForm)
    .merge('auth.', auth)

// export type definition of API
export type AppRouter = typeof appRouter
