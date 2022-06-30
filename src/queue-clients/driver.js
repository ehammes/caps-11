'use strict';

const MessageClient = require('./messageClient/messageClient');
const Chance = require('chance');
const chance = new Chance();
const driver = new MessageClient('driver messages'); // VERIFY


// driver.publish('GET_ALL_MESSAGES', { queueID: 'driver messages'});


// Acme-Widgets store

driver.subscribe('PICKUP', (payload) => {
  console.log(`confirmed "${payload.text}" message received`);
  driver.publish('RECEIVED', payload);
});


setInterval(() => {
  console.log('new message sent to vendor regarding package in TRANSIT');
  driver.publish('TRANSIT', { messageId: chance.guid(), text: `Package in TRANSIT for acme-widgets` });
}, 1000);


setInterval(() => {
  console.log('new message sent to vendor regarding package DELIVERED');
  driver.publish('DELIVERED', { messageId: chance.guid(), text: 'Package DELIVERED for acme-widgets' });
}, 1000);

driver.subscribe('DELIVERED', (payload) => {
  console.log('message received', payload);
  driver.publish('RECEIVED', payload);
});


// 1-800-flowers Store

driver.subscribe('PICKUP', (payload) => {
  console.log(`confirmed "${payload.text}" message received`);
  driver.publish('RECEIVED', payload);
});


setInterval(() => {
  console.log('new message sent to vendor regarding package in TRANSIT');
  driver.publish('TRANSIT', { messageId: chance.guid(), text: `Package in TRANSIT for 1-800-flowers` });
}, 1000);


setInterval(() => {
  console.log('new message sent to vendor regarding package DELIVERED');
  driver.publish('DELIVERED', { messageId: chance.guid(), text: 'Package DELIVERED for 1-800-flowers' });
}, 1000);

driver.subscribe('DELIVERED', (payload) => {
  console.log('message received', payload);
  driver.publish('RECEIVED', payload);
});
