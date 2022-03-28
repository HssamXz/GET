const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::etuidcart.etuidcart' , ({ strapi })  => ({

        async comments (ctx) {
         const { licenceId } = ctx.params ;
         const etuidcarts = await strapi.services('api::etuidcart.etuidcart').etuidcarts.findOne({ licenceId });
          return etuidcarts.comments ;
       },
   
}));

