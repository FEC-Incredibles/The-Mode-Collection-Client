const express = require('express');
const path = require('path');
const store = require('./StoreAPI.js');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/products', (req, res) => {
  store.getProducts()
  .then((response) => {
    console.log('data => ', response.data)
    res.status(200).json(response.data)
  })
  .catch((err) => {
    console.log('error getting store data => ', err)
    res.sendStatus(500);
  })
})


let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});