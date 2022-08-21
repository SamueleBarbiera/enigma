import { env } from './src/env/server.mjs'

/**
 * Generics for autocompletion .
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
    return config
}

export default defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'localhost',
            'djbvayehzzzpqffzyyva.supabase.co',
            'tailwindui.com',
            'images.unsplash.com',
            'lh3.googleusercontent.com',
            'https://djbvayehzzzpqffzyyva.supabase.co',
        ],
        formats: ['image/avif', 'image/webp'],
    },
})
