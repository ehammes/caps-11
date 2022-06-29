'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const Chance = require('chance');
const chance = new Chance();

// Vendor alert for PICKUP
socket.on('PICKUP', vendorPickupHandler);
function vendorPickupHandler(payload) {
  console.log(`From Vendor: package PICKUP ready for ${payload.store}`);
}

// Vendor notified of DELIVERED
socket.on('DELIVERED', vendorPackageDelivered);
function vendorPackageDelivered (payload){
  console.log(`Thank you, ${payload.customer}`);
}

const room = chance.company();
socket.emit('JOIN', room);

setInterval(() => {
  const order = {
    store: chance.company(),
    orderID: chance.integer({ min: 10000000, max: 100000000 }),
    customer: chance.name(),
    address: chance.city() + ', ' + chance.state(),
  };
  socket.emit('PICKUP', order);
}, 3000);

module.exports = { vendorPickupHandler, vendorPackageDelivered };