module.exports = ({ env }) => ({
    host: env('HOST', '127.0.0.1'),
    port: env.int('PORT', 1337),
    url: env('', 'http://localhost:1337'),
    app: {
        keys: env.array('APITOKEN_SUPERADMIN'),
    },
})
