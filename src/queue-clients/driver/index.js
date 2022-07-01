'use strict';

const DriverClient = require('./driverClient');
const acmeDriver = new DriverClient('acme-widgets');
// const flowersDriver = new DriverClient('1-800-flowers');

// Acme-Widgets store
acmeDriver.subscribe('PICKUP', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: package for ${payload.store} was PICKED-UP by driver`);
    acmeDriver.publish('TRANSIT', payload);
  }, 2000);
});

acmeDriver.subscribe('TRANSIT', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: order# ${payload.orderID} for ${payload.store} is in TRANSIT with driver`);
    acmeDriver.publish('DELIVERED', payload);
  }, 2000);
});

acmeDriver.subscribe('DELIVERED', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: order# ${payload.orderID} DELIVERED by driver for ${payload.store}`);
  }, 2000);
});