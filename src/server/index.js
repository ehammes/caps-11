'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

// instance of a listening event server at PORT
const server = new Server(PORT);

// Namespace
const caps = server.of('/caps');


caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace!', socket.id);
  
  
  // Join a room
  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room!`);
    socket.join(room);
  });

  // PICKUP
  socket.on('PICKUP', (payload) => {
    logEvent('PICKUP', payload);
    caps.emit('PICKUP', payload);
    
  });
  
  // TRANSIT
  socket.on('TRANSIT', (payload) => {
    logEvent('TRANSIT', payload);
    caps.emit('TRANSIT', payload); //add .to for specific room/store
    
  });
  
  // DELIVERED
  socket.on('DELIVERED', (payload) => {
    logEvent('DELIVERED',payload);
    caps.emit('DELIVERED', payload);
    
  });
});

function logEvent(event, payload){
  let time = new Date();
  console.log('EVENT:', {event, time, payload});
}
