require('dotenv').config();

const Server = require('./models/server');
const server = new Server();

//para escuchar el servidor
server.listen();