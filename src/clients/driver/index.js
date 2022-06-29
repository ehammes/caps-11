'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

// Driver PICKUP
socket.on('PICKUP', driverPickupHandler);

function driverPickupHandler(payload) {
  setTimeout(() => {
    console.log(`Driver, there is a package ready for PICKUP order# ${payload.orderID}`);
    socket.emit('TRANSIT', payload);
  }, 1000);
}

// Driver TRANSIT
socket.on('TRANSIT', driverTransitHandler);
function driverTransitHandler(payload) {
  setTimeout(() => {
    console.log(`Package in TRANSIT for order# ${payload.orderID}`);
    socket.emit('DELIVERED', payload);
  }, 1000);
}

// Driver DELIVERED
socket.on('DELIVERED', driverPackageDelivered);
function driverPackageDelivered(payload) {
  setTimeout(() => {
    console.log(`Package DELIVERED for order# ${payload.orderID}`);
  }, 1000);
}

module.exports = { driverPickupHandler, driverTransitHandler, driverPackageDelivered };