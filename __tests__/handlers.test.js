'use strict';

const eventPool = require('../src/createEventPool');
const vendorPickupHandler = require('./packagePickup/handleVendorPackagePickup');
const driverPickupHandler = require('./packagePickup/handleDriverPackagePickup');
const driverTransitHandler = require('./packageTransit/handleDriverPackageTransit');
const driverPackageDelivered = require('./packageDelivered/handleDriverPackageDelivered');
const vendorPackageDelivered = require('./packageDelivered/handleVendorPackageDelivered');

//mock data
jest.mock('../src/createEventPool', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  }
})

describe('Testing handlers', () => {
  describe('Testing pickup handlers', () => {
    test('Should log message to console regarding package ready for pickup', () => {


    });

    test('Should log message to console regarding package ready for driver to pickup and emit the TRANSIT event', () => {


    });
  },

  describe('Testing TRANSIT handlers', () => {

    test('Should log message to console regarding package DELIVERED by driver and emit the DELIVERED event', () => {


    });
  },
  describe('Testing DELIVERED handlers', () => {
    test('Should log message to console that package has been DELIVERED by customer', () => {


    });

    test('Should log message to console that package has been delivered', () => {


      });
    })
});