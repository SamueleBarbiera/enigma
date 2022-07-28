module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['lh3.googleusercontent.com', 'https://djbvayehzzzpqffzyyva.supabase.co'],
        formats: ['image/avif', 'image/webp'],
    },
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        //IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
        FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    },
    publicRuntimeConfig: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        //IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    },
}
