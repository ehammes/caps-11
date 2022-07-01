'use strict';

const VendorClient = require('./vendorClient');
const Chance = require('chance');
const chance = new Chance();
const acmeVendor = new VendorClient('acme-widgets');
const flowersVendor = new VendorClient('1-800-flowers');

// Acme-Widgets store
setInterval(() => {
  const order = {
    store: 'acme-widgets',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.city() + ', ' + chance.state(),
  };
  console.log(`VENDOR: new order ready for PICKUP for ${order.store}`);
  acmeVendor.publish('PICKUP', { messageId: chance.guid(), ...order });
}, 8000);

acmeVendor.subscribe('DELIVERED', (payload) => {
  setTimeout(() => {
    console.log(`VENDOR: thank you for DELIVERING order# ${payload.orderID} for ${payload.store}`);
  }, 2000);

});

// 1-800-flowers Store
setInterval(() => {
  const order = {
    store: '1-800 flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.city() + ', ' + chance.state(),
  };
  console.log(`VENDOR: new order ready for PICKUP for ${order.store}`);
  flowersVendor.publish('PICKUP', { messageId: chance.guid(), ...order });
}, 8000);

// flowersVendor.subscribe('DELIVERED', (payload) => {
//   setTimeout(() => {
//     console.log(`VENDOR: thank you for DELIVERING order# ${payload.orderID} for ${payload.store}`);
//   }, 3000);
// });