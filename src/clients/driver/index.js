'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

// Driver PICKUP
socket.on('PICKUP', driverPickupHandler);

function driverPickupHandler (payload){
  console.log(`Driver, there is a package ready for PICKUP order# ${payload.orderID}`);
  socket.emit('TRANSIT', payload);
}

// Driver TRANSIT
socket.on('TRANSIT', driverTransitHandler);

function driverTransitHandler (payload){
  console.log(`Package in TRANSIT for order# ${payload.orderID}`);
  socket.emit('DELIVERED', payload);
}

// Driver DELIVERED
socket.on('DELIVERED', driverPackageDelivered);

function driverPackageDelivered (payload){
  console.log(`Package DELIVERED for order# ${payload.orderID}`);
}

module.exports = { driverPickupHandler, driverTransitHandler, driverPackageDelivered };