'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) =>  ({

    async cats(ctx) {
        console.log(ctx);
        try {
          ctx.body = 'ok';
        } catch (err) {
          ctx.body = err;
        }
      },

    async find(ctx) {
        // console.log(ctx);
        // some custom logic here
        ctx.query = { ...ctx.query, local: 'en' }
        console.log(ctx.query);
        // Calling the default core action
        const { data, meta } = await super.find(ctx);

        // some more custom logic
        meta.date = Date.now()

        return { data, meta };
    }
}));