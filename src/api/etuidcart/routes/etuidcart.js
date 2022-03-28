'use strict';

{/* module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/etuidcarts/:licenceId/comments',
        handler: 'etuidcarts.comments',
      },
    ]
  } */}
   


const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::etuidcart.etuidcart');
