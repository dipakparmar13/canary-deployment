'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello  welcome to my   website hello world v8');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);