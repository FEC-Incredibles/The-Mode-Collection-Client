import config from '../../../config.js';
import axios from 'axios';

const baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/";
const auth = {
  headers: {
    'Authorization': config.TOKEN,
  }
};

export const getMetaData = (product_id) => {
  let url = `${baseURL}reviews/meta/?product_id=${product_id}`;
  return axios.get(url, auth);
}

export const getReviews = (product_id, count, sort) => {
  let url = `${baseURL}reviews/?product_id=${product_id}&sort=${sort}&count=${count}`;
  // console.log("url ", url);
  return axios.get(url, auth);
}