//import express from 'express';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${PORT}
    \n-----
    \nRunning on ${process.env.NODE_ENV}
    \n-----
    \nHave a nice day`);
  }
});
