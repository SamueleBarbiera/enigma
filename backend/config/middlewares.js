module.exports = [
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
                    'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                directives: {
                    'script-src': ["'self'", 'editor.unlayer.com'],
                    'frame-src': ["'self'", 'editor.unlayer.com'],
                    'img-src': [
                        "'self'",
                        'data:',
                        'cdn.jsdelivr.net',
                        'strapi.io',
                        's3.amazonaws.com',
                    ],
                },
            },
        },
    },
]
