const express = require('express');
const path = require('path');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))


let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});