'use strict';

const MessageClient = require('./messageClient/messageClient');
const Chance = require('chance');
const chance = new Chance();
const vendor = new MessageClient('vendor messages'); // VERIFY

// Acme-Widgets store
setInterval(() => {
  const order = {
    store: 'acme-widgets',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.city() + ', ' + chance.state(),
  };
  console.log('new message sent to drivers for order PICKUP');
  vendor.publish('PICKUP', {
    messageId: chance.guid(), 
    text: `Order ready for PICKUP for ${order.store}`, 
    order,
  });
}, 3000);

vendor.subscribe('TRANSIT', (payload) => {
  console.log(`confirmed "${payload.text}" message received`);
  vendor.publish('RECEIVED', payload);
});

vendor.subscribe('DELIVERED', (payload) => {
  console.log(`confirmed "${payload.text}" message received`);
  vendor.publish('RECEIVED', payload);
});

setInterval(() => {
  console.log('new message sent to driver after DELIVERY');
  vendor.publish('DELIVERED', { messageId: chance.guid(), text: `Thank you for delivering order to acme-widgets` });
}, 1000);


// 1-800-flowers Store
setInterval(() => {
  const order = {
    store: '1-800-flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.city() + ', ' + chance.state(),
  };
  console.log('new message sent to drivers for order PICKUP');
  vendor.publish('PICKUP', {
    messageId: chance.guid(), 
    text: `Order ready for PICKUP for ${order.store}`, 
    order,
  });
}, 3000);

vendor.subscribe('TRANSIT', (payload) => {
  console.log(`confirmed "${payload.text}" message received`);
  vendor.publish('RECEIVED', payload);
});

vendor.subscribe('DELIVERED', (payload) => {
  console.log(`confirmed "${payload.text}" message received`);
  vendor.publish('RECEIVED', payload);
});

setInterval(() => {
  console.log('new message sent to driver after DELIVERY');
  vendor.publish('DELIVERED', { messageId: chance.guid(), text: `Thank you for delivering order to 1-800-flowers` });
}, 1000);