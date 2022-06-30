'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');

// instance of a listening event server at PORT
const server = new Server(PORT);

// Namespace
const caps = server.of('/caps');

const capsQueue = new Queue();


caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace!', socket.id);

  socket.onAny((event, payload) => {
    let time = new Date();
    console.log('Event:', { event, time, payload });
  });

  // Join a room
  socket.on('JOIN', (queueID) => {
    socket.join(queueID);
    socket.emit('JOIN', queueID);
  });

  // PICKUP
  socket.on('PICKUP', (payload) => {
    let currentQueue = capsQueue.read(payload.queueID);
    if (!currentQueue) {
      let queueKey = capsQueue.store(payload.queueID, new Queue());
      currentQueue = capsQueue.read(queueKey);
    }
    currentQueue.store(payload.messageID, payload); // need to change
    caps.emit('PICKUP', payload);
  });

  // TRANSIT
  socket.on('TRANSIT', (payload) => {
    let currentQueue = capsQueue.read(payload.queueID);
    if (!currentQueue) {
      let queueKey = capsQueue.store(payload.queueID, new Queue());
      currentQueue = capsQueue.read(queueKey);
    }
    currentQueue.store(payload.messageID, payload); 
    caps.emit('TRANSIT', payload);
  });

  // DELIVERED
  socket.on('DELIVERED', (payload) => {
    let currentQueue = capsQueue.read(payload.queueID);
    if (!currentQueue) {
      let queueKey = capsQueue.store(payload.queueID, new Queue());
      currentQueue = capsQueue.read(queueKey);
    }
    currentQueue.store(payload.messageID, payload);
    caps.emit('DELIVERED', payload);

  });

  // RECEIVED
  socket.on('RECEIVED', (payload) => {
    let currentQueue = capsQueue.read(payload.queueID);
    if (!currentQueue) {
      throw new Error('no queue exists');
    }
    let messageID = currentQueue.remove(payload.messageID);
    caps.to(payload.queueID).emit('RECEIVED', messageID);

  });

  // socket.on('GET_ALL_MESSAGES', (payload) => {
  //   let currentQueue = capsQueue.read(payload.queueID);
  //   Object.keys(currentQueue.data).forEach(messageID => {
  //     caps.emit('RECEIVED', currentQueue.read(messageID));
  //   });
  // });

});
