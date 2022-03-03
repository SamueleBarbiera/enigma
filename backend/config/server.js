module.exports = ({ env }) => ({
    host: env('HOST', '127.0.0.1'),
    port: env.int('PORT', 3003),
    url: env('', 'http://localhost:3003'),
    app: {
        keys: env.array('APITOKEN_SUPERADMIN'),
    },
})
