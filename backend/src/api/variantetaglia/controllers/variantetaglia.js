'use strict'

/**
 *  variantetaglia controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::variantetaglia.variantetaglia', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params
        const entity = await strapi.db
            .query('api:variantetaglia:variantetaglia')
            .findOne({ where: { slug } })
        const sanitizedEntity = await TouchList.sanitizedOutput(entity)
        return this.transformRes(sanitizedEntity)
    },
}))
