const express = require('express');
const path = require('path');
const store = require('./StoreAPI.js');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))


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
    res.sendStatus(500)
  })
})

app.get('/products/:id/related', (req, res) => {
  store.getRelatedProductsID(req.params.id)
  .then((response) => {
    // console.log('product styles => ', response.data)
    res.status(200).json(response.data);
  })
  .catch((err) => {
    console.log('error getting product ids => ', err)
    res.sendStatus(500)
  })
})

app.get('/relatedItems', (req, res) => {
  let sortedData = [];
  let relatedIDs = JSON.parse(req.query.relatedIDs);
  let currentFeatures = JSON.parse(req.query.currentFeatures)
  console.log(currentFeatures);
  let finish = () => {
    setTimeout(() => {
      res.json(sortedData);
    }, 400);
  }
  relatedIDs.forEach((itemID, index) => {
    let id = itemID;
    let starred = false;
    let category, productData, price, stars, primaryPhotoURL, features;
    store.getProductStyles(itemID)
    .then((element) => {
      let primaryPhotos = element.data.results.filter(style => style['default?'] === true)
      if (primaryPhotos.length === 1) {
        primaryPhotoURL = primaryPhotos[0].photos[0].thumbnail_url;
        return store.getProductInfo(itemID);
      } else {
        throw "There is not a default photo for this product" + itemID
      }
    })
    .then((element) => {
      category = element.data.category;
      productData = element.data.slogan;
      price = element.data.default_price;
      features = element.data.features;
      return store.getReviewMeta(itemID);
    })
    .then((element) => {
      //console.log(element.data)
      let numReview = 0;
      let totalScore = 0;
      for(var i = 1; i <= 5; i++) {
        numReview += Number(element.data.ratings[String(i)]);
        totalScore += (i * Number(element.data.ratings[String(i)]));
      }
      stars = Math.floor(totalScore / numReview)
      if (stars === NaN) {
        stars = 3;
      }
      // if (category && productData && price && stars && primaryPhotoURL) {
        sortedData.push({
          "id": itemID,
          "starred": true,
          "imgURL": primaryPhotoURL,
          "category": category,
          "productData": productData,
          "price": ('$' + String(price)),
          "stars": String(stars)
        })
      //}
      if (index === relatedIDs.length - 1) {
        finish()
      }
    })
    .catch ((err) => {
      //console.log('Error:', err);
    })
  })
})

// app.get('/qa/questions/:id', (req, res) => {
//   //console.log('this is param ', req.params.id);
//   store.getProductQuestions(req.params.id)
//     .then((response) => {
//       //console.log(response);
//       res.status(200).json(response.data);
//     })
//     .catch((err) => {
//       console.log('ERR GETTING QUESTIONS FROM DB ', err)
//     })
// })

// app.put('/qa/questions/:id/helpful', (req, res) => {
//   console.log('this is the request object', req.params.id);
//   store.putProductHelpful(req.params.id)
//     .then((response) => {
//       console.log('PUT QHelpful');
//     })
//     .catch((err) => {
//       console.log('ERR PUTING HELPFUL FOR QUESTION ', err)
//     })
// })

// app.get('/qa/questions/:id', (req, res) => {
// })

app.all('/qa/questions*', store.questions);

app.all('/qa/answers*', store.answers);


app.all('/reviews*', store.reviews);

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});