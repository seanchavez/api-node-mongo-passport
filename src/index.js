//import express from 'express';
//import constants  from './config/constants.js';
const constants = require('./config/constants');
const database = require('./config/database');
const middleware = require('./config/middleware');

const express = require('express');
const app = express();
//const PORT = constants.PORT || 3000;
console.log(middleware);
const middlewareConfig = middleware.middleware(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(
      `Server running on port: ${constants.PORT} --- Running on ${
        process.env.NODE_ENV
      } --- Have a nice day.`,
    );
  }
});
