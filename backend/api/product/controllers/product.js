'use strict';


const qS = require('query-string')
module.exports = {
  find: async (ctx) => {
    const categories = qS.parse(ctx.req._parsedUrl.query).categories

    // const result = await strapi
    //   .query('product')
    //   .model.query(qb => {
    //     qb.where('category', 1);
    //   })
    //   .fetch();
    // const fields = result.toJSON();
    // console.log(fields)

    const fields = await strapi.query('product').find({id_in: categories.split(',').map(el => +el)})
    // console.log(fields)
    ctx.body = fields
  }

};
