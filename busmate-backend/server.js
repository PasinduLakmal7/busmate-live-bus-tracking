const express = require('express');
const {Server} = require('socket.io');
const helmet = require('helmet');
const app = express();
const server = require('http').createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
    }
});

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('hi')
})

io.on('connection', (socket) => {});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});


