const express = require('express');
const path = require('path');
const store = require('./StoreAPI.js');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/products', (req, res) => {
  store.getProducts()
  .then((response) => {
    // console.log('products data => ', response.data)
    res.status(200).json(response.data)
  })
  .catch((err) => {
    console.log('error getting store data => ', err)
    res.sendStatus(500);
  })
})

app.get('/products/:id', (req, res) => {
  store.getProductInfo(req.params.id)
  .then((response) => {
    // console.log('product info => ', response.data)
    res.status(200).json(response.data);
  })
  .catch((err) => {
    console.log('error getting product data => ', err)
    res.sendStatus(500);
  })
})

app.get('/products/:id/styles', (req, res) => {
  store.getProductStyles(req.params.id)
  .then((response) => {
    // console.log('product styles => ', response.data)
    res.status(200).json(response.data);
  })
  .catch((err) => {
    console.log('error getting product styles => ', err)
    response.sendStatus(500)
  })
})


let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});