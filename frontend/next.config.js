module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['cdn.sanity.io', 'lh3.googleusercontent.com'],
        formats: ['image/avif', 'image/webp'],
    },
    async rewrites() {
        return [
            {
                source: '/*',
                has: [
                    {
                        type: 'query',
                        key: 'page',
                        // the page value will not be available in the
                        // destination since value is provided and doesn't
                        // use a named capture group e.g. (?<page>home)
                        value: 'home',
                    },
                    {
                        type: 'cookie',
                        key: 'authorized',
                        value: 'true',
                    },
                ],
                destination: '/*',
            },
        ]
    },
}
