const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')

const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true' })

const nextConfig = {
    i18n: {
        locales: ['it', 'en'],
        defaultLocale: 'it',
        localeDetection: false,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost', 'tailwindui.com', 'images.unsplash.com', 'lh3.googleusercontent.com', 'https://djbvayehzzzpqffzyyva.supabase.co'],
        formats: ['image/avif', 'image/webp'],
    },
    env: {
        NEXT_PUBLIC_ANALYZE: process.env.ANALYZE,
        NEXT_PUBLIC_SUPABASE_API_KEY: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
        NEXT_PUBLIC_SUPABASE_API_URL: process.env.NEXT_PUBLIC_SUPABASE_API_URL,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        NEXT_PUBLIC_FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
        NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
        NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
        NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
        NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
        NEXT_PUBLIC_DB_PSW: process.env.NEXT_PUBLIC_DB_PSW,
        NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
        NEXT_PUBLIC_STRIPE_ACCOUNT_ID: process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID,
        NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET,
        NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET: process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET,
        NEXT_PUBLIC_SUPABASE_PSW: process.env.NEXT_PUBLIC_SUPABASE_PSW,
        NEXT_PUBLIC_SUPABASE_API_SECRET: process.env.NEXT_PUBLIC_SUPABASE_API_SECRET,
        NEXT_PUBLIC_SUPABASE_JWT: process.env.NEXT_PUBLIC_SUPABASE_JWT,
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_SUPABASE_API_URL: process.env.NEXT_PUBLIC_SUPABASE_API_URL,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
}

module.exports = withPlugins([[bundleAnalyzer]], nextConfig)
