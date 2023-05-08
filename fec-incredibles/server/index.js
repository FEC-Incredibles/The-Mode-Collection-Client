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

app.get('/relatedItems', (req, res) => {
  let sortedData = [];
  let relatedIDs = req.body.relatedIDs;

  relatedIDs.forEach((itemID) => {
    let id = itemID;
    let starred = false;
    let category, productData, price, stars, primaryPhotoURL;
    store.getProductStyles(itemID)
    .then((element) => {
      let primaryPhotos = element.data.results.filter(style => style['default?'] === true)
      console.log(primaryPhotos.length)
      if (primaryPhotos.length === 1) {
        primaryPhotoURL = primaryPhotos[0].photos[0].thumbnail_url;
        return store.getProductInfo(itemID);
      } else {
        throw "There is not a default photo for this product" + itemID
      }
    })
    .then((element) => {
      category = element.category;
      productData = element.slogan;
      price = element.default_price;
      return store.getReviewMeta(itemID);
    })
    .then((element) => {
      let numReview = 0;
      let totalScore = 0;
      for(var i = 1; i <= 5; i++) {
        numReview += element.ratings.i;
        totalScore += (i * element.ratings.i);
      }
    })
    .catch ((err) => {
      console.log('Error:', err);
    })
  })
  res.json({"test": "worked"});

})




let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});