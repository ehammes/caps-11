'use strict';

const { io } = require('socket.io-client');
const SOCKET_URL = 'http://localhost:3001/caps';

class DriverClient {
  constructor(queueID) {
    this.queueID = queueID;
    this.socket = io(SOCKET_URL);
    // this.socket.emit('JOIN', {queueID}); /// Does the driver need to join a room???
    // this.socket.on('JOIN', (id) => {
    // console.log('Joined client queue', id);
    // });
  }

  publish(event, payload) {
    this.socket.emit(event, { queueID: this.queueID, ...payload });
  }

  subscribe(event, callback) {
    this.socket.on(event, callback);
  }
}

module.exports = DriverClient;