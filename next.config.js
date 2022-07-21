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
    },
    publicRuntimeConfig: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        //IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    },
}
