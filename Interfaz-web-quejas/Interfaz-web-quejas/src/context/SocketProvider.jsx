import React, { createContext, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000', {
  withCredentials: true, // Asegúrate de que esto esté habilitado
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('complaintUnassigned' , (complainId) => {
      console.log(`se jodio esta complain: ${complainId}`);
      socket.emit("testUnassigned2" , data);
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('complaintUnassigned');
    };
  }, []);


  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
