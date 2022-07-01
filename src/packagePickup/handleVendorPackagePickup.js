'use strict';

const eventPool = require('../archived/createEventPool');

eventPool.on('PICKUP', vendorPickupHandler);

function vendorPickupHandler (payload){
  console.log(`From Vendor: package PICKUP ready for ${payload.store}`);
}

// necessary for tests
module.exports = vendorPickupHandler;