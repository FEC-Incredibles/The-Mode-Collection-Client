const axios = require('axios');
const config = require('../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'

const options = {
  headers: {
    'User-Agent': 'request',
    'Authorization': config.TOKEN,
    'contentType': 'application/json'
  }
}


module.exports.getProducts = () => {
  return axios.get(`${url}/products?count=50`, options)
  .then((response) => { return response; })
  .catch((err) => { console.log('API ERROR GETTING PRODUCTS => ', err); })
}

module.exports.getProductInfo = (productID) => {

  return axios.get(`${url}/products/${productID}`, options)
  .then((response) => {return response})
  .catch((err) => { console.log('API ERROR GETTING PRODUCT INFO FOR ', productID, '=> ', err)})
}

module.exports.getProductStyles = (productID) => {
  return axios.get(`${url}/products/${productID}/styles`, options)
  .then((response) => { return response; })
  .catch((err) => { console.log('API ERROR GETTING PRODUCT STYLES FOR ', productID, '=> ', err)} )
}

module.exports.getRelatedProductsID = (productID) => {
  return axios.get(`${url}/products/${productID}/related`, options)
  .then((response) => { return response; })
  .catch((err) => { console.log('API ERROR GETTING PRODUCT STYLES FOR ', productID, '=> ', err)} )
}

module.exports.getReviewMeta = (productID) => {
  return axios.get(`${url}/reviews/meta/?product_id=${productID}`, options)
  .then((response) => { return response; })
  .catch((err) => { console.log('API ERROR GETTING PRODUCT META FOR ', productID, '=> ', err)} )
}