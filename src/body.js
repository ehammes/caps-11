'use strict';

const eventPool = require('./createEventPool');
require('./packagePickup/handleVendorPackagePickup');
require('./packagePickup/handleDriverPackagePickup');
require('./packageTransit/handleDriverPackageTransit');
require('./packageDelivered/handleDriverPackageDelivered');
require('./packageDelivered/handleVendorPackageDelivered');
const order = require('./order');

eventPool.on('PICKUP', (payload) => logEvent('PICKUP',payload));
eventPool.on('TRANSIT', (payload) => logEvent('TRANSIT',payload));
eventPool.on('DELIVERED', (payload) => logEvent('DELIVERED',payload));

function logEvent(event, payload){
  let time = new Date();
  console.log('EVENT:', {event, time, payload});
}

setInterval(() => {
  // let newOrder
  console.log('package ready for PICKUP');
  // 2 args:  eventName, payload
  eventPool.emit('PICKUP', order);
}, 3000);