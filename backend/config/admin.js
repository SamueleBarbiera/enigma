module.exports = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'b1a7822588360079c22b64555fb1dae2'),
    },
})
