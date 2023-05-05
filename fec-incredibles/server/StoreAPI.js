const axios = require('axios');
const config = require('../config.js');

module.exports.getProducts = () => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products'

const options = {
  headers: {
    'User-Agent': 'request',
    'Authorization': config.TOKEN,
    'contentType': 'application/json'
  }
}

module.exports.getProducts = () => {

  return axios.get(url, options)
  .then((response) => { return response; })
  .catch((err) => { console.log('API ERROR GETTING PRODUCTS => ', err); })
}

module.exports.getProductInfo = (productID) => {

  return axios.get(`${url}/${productID}`, options)
  .then((response) => {return response})
  .catch((err) => { console.log('API ERROR GETTING PRODUCT INFO FOR ', productID, '=> ', err)})
}

module.exports.getProductStyles = (productID) => {
  return axios.get(`${url}/${productID}/styles`, options)
  .then((response) => { return response; })
  .catch((err) => { console.log('API ERROR GETTING PRODUCT STYLES FOR ', productID, '=> ', err)} )
}