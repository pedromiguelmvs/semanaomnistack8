const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack10-o7zmp.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);