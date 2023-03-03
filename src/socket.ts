import http from 'http';
import {Server} from 'socket.io';
import Users from './models/user';

const socketIO = (server: http.Server) => {
    const io = new Server(server, {
        cors: {
            origin: '*'
        }
    });

    io.on("connection", (socket) => {
        
    })
    
}

export default socketIO