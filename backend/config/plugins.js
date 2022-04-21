/* eslint-disable no-unused-vars */
module.exports = ({ env }) => ({
    redis: {
        config: {
            connections: {
                default: {
                    connection: {
                        host: '127.0.0.1',
                        port: 6379,
                        db: 0,
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
})
