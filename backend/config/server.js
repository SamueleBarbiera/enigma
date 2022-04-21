module.exports = ({ env }) => ({
    host: env('HOST', '127.0.0.1'),
    port: env.int('PORT', 8082),
    url: env('', 'http://localhost:8082'),
    app: {
        keys: env.array('APITOKEN_SUPERADMIN'),
    },
})
