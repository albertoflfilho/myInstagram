const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);

mongoose.connect(
  'mongodb+srv://albertoflfilho:dbUserPassword@cluster0-iz5hy.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

app.use(cors());

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
);

app.use(require('./routes'));

server.listen(3333);
