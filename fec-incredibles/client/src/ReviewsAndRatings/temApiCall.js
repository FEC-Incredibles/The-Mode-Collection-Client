import config from '../../../config.js';
import axios from 'axios';

const baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/";
const auth = {
  headers: {
    'Authorization': config.TOKEN,
  }
};

export const getMetaData = (product_id) => {
  return axios.get(baseURL + 'reviews/meta/?product_id=' + product_id, auth)
}

export const getReviews = (product_id) => {
  return axios.get(baseURL + 'reviews/?product_id=' + product_id, auth)
}