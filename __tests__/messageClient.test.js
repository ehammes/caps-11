'use strict';

const VendorClient = require('../src/queue-clients/vendor/vendorClient');
const DriverClient = require('../src/queue-clients/driver/driverClient');
const { io } = require('socket.io-client');

jest.mock('socket.io-client', () => {
  return {
    io: jest.fn(() => {
      return {
        on: jest.fn(),
        emit: jest.fn(),
      };
    }),
  };
});

describe('Client Tets', () => {
  test('Call socket function for vendor on instantiation', () => {
    jest.clearAllMocks();
    let client = new VendorClient('new');
    expect(io).toHaveBeenCalledWith('http://localhost:3001/caps');
    expect(client.socket.emit).toHaveBeenCalledWith('JOIN', 'new');
    expect(client.socket.on).toHaveBeenCalled();
  });

});