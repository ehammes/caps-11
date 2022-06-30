'use strict';

const MessageClient = require('../src/queue-clients/messageClient/messageClient');
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
  test('Call socket function on instantiation', () => {
    jest.clearAllMocks();
    let client = new MessageClient('new');
    expect(io).toHaveBeenCalledWith('http://localhost:3002/caps');
    expect(client.socket.emit).toHaveBeenCalledWith('JOIN', {queueID: 'new'});
  });
});