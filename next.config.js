module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['lh3.googleusercontent.com', 'https://djbvayehzzzpqffzyyva.supabase.co'],
        formats: ['image/avif', 'image/webp'],
    },
    images: {
        domains: ['localhost', 'tailwindui.com', 'images.unsplash.com', 'djbvayehzzzpqffzyyva.supabase.co'],
    },
    env: {
        NEXT_PUBLIC_SUPABASE_API_KEY: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,

        NEXT_PUBLIC_SUPABASE_API_URL: process.env.NEXT_PUBLIC_SUPABASE_API_URL,
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        //IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
        FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_SUPABASE_API_KEY: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,

        NEXT_PUBLIC_SUPABASE_API_URL: process.env.NEXT_PUBLIC_SUPABASE_API_URL,

        API_URL: process.env.NEXT_PUBLIC_API_URL,
        //IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    },
}
