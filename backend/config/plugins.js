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
    seo: {
        enabled: true,
    },
    transformer: {
        enabled: true,
        config: {
            prefix: '/api/',
        },
    },
    ezforms: {
        config: {
            captchaProvider: {
                name: 'none',
            },
            notificationProviders: [],
        },
        notificationProviders: [
            {
                name: 'email',
                enabled: true,
                config: {
                    from: 'barbierasamuele01@gmail.com',
                },
            },
            {
                provider: 'twilio',
                enabled: true,
                config: {
                    accountSid: '',
                    authToken: '',
                    from: '',
                },
            },
        ],
    },

    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'barbierasamuele01@gmail.com',
                defaultReplyTo: 'barbierasamuele01@gmail.com',
                testAddress: 'barbierasamuele01@gmail.com',
            },
        },
    },
    sentry: {
        enabled: true,
        //enabled: env('NODE_ENV') === 'production',
        config: {
            dsn: env('https://c19753e72b914a25960e2497ce04d983@o1171060.ingest.sentry.io/6265122'),
            sendMetadata: true,
        },
    },
    'email-designer': {
        enabled: true,
        config: {
            editor: {
                //projectId: [UNLAYER_PROJECT_ID],
                tools: {
                    heading: {
                        properties: {
                            text: {
                                value: 'This is the new default text!',
                            },
                        },
                    },
                },
                options: {
                    features: {
                        colorPicker: {
                            presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
                        },
                    },
                    fonts: {
                        showDefaultFonts: false,
                        customFonts: [
                            {
                                label: 'Anton',
                                value: "'Anton', sans-serif",
                                url: 'https://fonts.googleapis.com/css?family=Anton',
                            },
                            {
                                label: 'Lato',
                                value: "'Lato', Tahoma, Verdana, sans-serif",
                                url: 'https://fonts.googleapis.com/css?family=Lato',
                            },
                            // ...
                        ],
                    },
                    mergeTags: [
                        {
                            name: 'Email',
                            value: '{{= USER.username }}',
                            sample: 'john@doe.com',
                        },
                        // ...
                    ],
                },
                appearance: {
                    theme: 'dark',
                    panels: {
                        tools: {
                            dock: 'left',
                        },
                    },
                },
            },
        },
    },
})
