/* eslint-disable no-unused-vars */
module.exports = ({ env }) => ({
    redis: {
        config: {
            connections: {
                default: {
                    connection: {
                        host: 'containers-us-west-79.railway.app',
                        port: 5548,
                        db: 0,
                    password:'3fXw4h0AGUXt0mkBdYws',
                    },
                    settings: {
                        debug: false,
                        cluster: false,
                    },
                },
            },
        },
    },
    'rest-cache': {
        config: {
            provider: {
                name: 'redis',
                options: {
                    max: 32767,
                    connection: 'default',
                    logs: true,
                },
            },
            strategy: {
                maxAge: 10000, // every 10 minutes
                enableEtag: true,
                enableXCacheHeaders: true,
                enableAdminCTBMiddleware: true,
                clearRelatedCache: true,
                contentTypes: [
                    {
                        contentType: 'api::categoria.categoria',
                        //maxAge: 3600000,
                        hitpass: false,
                        keys: {
                            useQueryParams: false,
                            useHeaders: ['accept-encoding'],
                        } /*
                    routes: [
                    {
                        path: "/api/categories/slug/:slug",
                        keys: {
                        useQueryParams: false,
                        useHeaders: ["accept-encoding", "authorization"],
                        },
                        maxAge: 18000,
                        method: "GET",
                    },
                    ],*/,
                    },
                    {
                        contentType: 'api::variantetaglia.variantetaglia',
                        //maxAge: 3600000,
                        hitpass: false,
                        keys: {
                            useQueryParams: false,
                            useHeaders: ['accept-encoding'],
                        } /*
                        routes: [
                        {
                            path: "/api/categories/slug/:slug",
                            keys: {
                            useQueryParams: false,
                            useHeaders: ["accept-encoding", "authorization"],
                            },
                            maxAge: 18000,
                            method: "GET",
                        },
                        ],*/,
                    },
                ],
            },
        },
    },
    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '7d',
            },
        },
    },
    transformer: {
        enabled: true,
        config: {
            prefix: '/api/',
        },
    },
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
})
