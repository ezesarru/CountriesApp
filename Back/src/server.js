//? Imports
const express = require("express");
const server = express();
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/routesIndex");

//? Middlewares
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    )
    next()
})
server.use('/countries', router)

module.exports = server;
