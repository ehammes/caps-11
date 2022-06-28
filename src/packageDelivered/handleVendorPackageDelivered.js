'use strict';

const eventPool = require('../createEventPool');

eventPool.on('DELIVERED', vendorPackageDelivered);

function vendorPackageDelivered (payload){
  console.log(`Thank you, ${payload.customer}`);

}

// necessary for tests
module.exports = vendorPackageDelivered;
