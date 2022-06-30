'use strict';

const eventPool = require('../src/archived/createEventPool');
const vendorPickupHandler = require('../src/queue-clients/archived/vendor/vendorPackagePickup/handleVendorPackagePickup');
const driverPickupHandler = require('../src/queue-clients/archived/driver/packagePickup/handleDriverPackagePickup');
const driverTransitHandler = require('../src/queue-clients/archived/driver/packageTransit/handleDriverPackageTransit');
const driverPackageDelivered = require('../src/queue-clients/archived/driver/packageDelivered/handleDriverPackageDelivered');
const vendorPackageDelivered = require('../src/queue-clients/archived/vendor/vendorPackageDelivered/handleVendorPackageDelivered');

//mock data
jest.mock('../src/createEventPool', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('Testing handlers', () => {
  describe('Testing PICKUP handlers', () => {
    console.log = jest.fn();
    test('Should log message to console regarding package ready for pickup', () => {
      vendorPickupHandler({ store: 'ABC 123 Company' });

      expect(console.log).toHaveBeenCalledWith('From Vendor: package PICKUP ready for ABC 123 Company');

    });

    test('Should log message to console regarding package ready for driver to pickup and emit the TRANSIT event', () => {
      driverPickupHandler({ orderID: 123 });

      expect(console.log).toHaveBeenCalledWith('Driver, there is a package ready for PICKUP order# 123');
      expect(eventPool.emit).toHaveBeenCalledWith('TRANSIT', { orderID: 123 });

    });
  }),

  describe('Testing TRANSIT handlers', () => {

    test('Should log message to console regarding package DELIVERED by driver and emit the DELIVERED event', () => {
      driverTransitHandler({ orderID: 123 });

      expect(console.log).toHaveBeenCalledWith('Package in TRANSIT for order# 123');
      expect(eventPool.emit).toHaveBeenCalledWith('TRANSIT', { orderID: 123 });

    });
  }),

  describe('Testing DELIVERED handlers', () => {

    test('Should log message to console that package has been DELIVERED by customer', () => {
      driverPackageDelivered({ orderID: 123 });

      expect(console.log).toHaveBeenCalledWith('Package DELIVERED for order# 123');

    });

    test('Should log message to console that package has been delivered', () => {
      vendorPackageDelivered({ customer: 'John Smith' });

      expect(console.log).toHaveBeenCalledWith('Thank you, John Smith');

    });
  });
});