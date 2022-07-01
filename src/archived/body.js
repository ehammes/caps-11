// 'use strict';

// const eventPool = require('./createEventPool');
// require('./clients/vendor/packagePickup/handleVendorPackagePickup');
// require('./clients/driver/packagePickup/handleDriverPackagePickup');
// require('./clients/driver/packageTransit/handleDriverPackageTransit');
// require('./clients/driver/packageDelivered/handleDriverPackageDelivered');
// require('./clients/vendor/packageDelivered/handleVendorPackageDelivered');
// const Chance = require('chance');
// const chance = new Chance();

// eventPool.on('PICKUP', (payload) => logEvent('PICKUP', payload));
// eventPool.on('TRANSIT', (payload) => logEvent('TRANSIT', payload));
// eventPool.on('DELIVERED', (payload) => logEvent('DELIVERED',payload));

// function logEvent(event, payload){
//   let time = new Date();
//   console.log('EVENT:', {event, time, payload});
// }

// setInterval(() => {
//   const order = {
//     store: chance.company(),
//     orderID: chance.integer({ min: 5, max: 10 }),
//     customer: chance.name(),
//     address: chance.city() + ', ' + chance.state(),
//   };
//   eventPool.emit('PICKUP', order);
// }, 3000);