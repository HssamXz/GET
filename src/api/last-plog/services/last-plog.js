'use strict';

/**
 * last-plog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-plog.last-plog');
