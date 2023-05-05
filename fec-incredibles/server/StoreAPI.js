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

  return axios.get(url, options)
  .then((response) => { return response; })
  .catch((err) => { console.log('LOOK HERE => ', err); })
}
