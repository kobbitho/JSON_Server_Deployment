const jsonServer = require('json-server');
const cors = require('cors'); //import the CORS library

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 5000;

//Configure CORS to allow requests from any origin
const corsOptions ={
    origin: '*'
};

//Apply CORS middleware options
server.use(cors(corsOptions));

//Apply default middlewares
server.use(middlewares);
server.use(router);
server.listen(port);