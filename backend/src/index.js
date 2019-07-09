const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send(`myInstagram ${req.query.name}`);
});

app.listen(3333);
