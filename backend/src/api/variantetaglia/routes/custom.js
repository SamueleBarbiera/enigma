'use strict'
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/variantetaglias/:slug',
            handler: 'variantetaglia.findOne',
            config: { auth: false },
        },
    ],
}
