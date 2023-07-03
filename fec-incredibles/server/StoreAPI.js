const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.API_URL;

const options = {
  headers: {
    "User-Agent": "request",
    Authorization: process.env.API_TOKEN,
    contentType: "application/json",
  },
};

module.exports.getProducts = () => {
  return axios
    .get(`${url}/products?count=50`, options)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("API ERROR GETTING PRODUCTS => ", err);
    });
};

module.exports.getProductInfo = (productID) => {
  return axios
    .get(`${url}/products/${productID}`, options)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("API ERROR GETTING PRODUCT INFO FOR ", productID, "=> ", err);
    });
};

module.exports.getProductStyles = (productID) => {
  return axios
    .get(`${url}/products/${productID}/styles`, options)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("API ERROR GETTING PRODUCT STYLES FOR ", productID, "=> ", err);
    });
};

module.exports.getRelatedProductsID = (productID) => {
  return axios
    .get(`${url}/products/${productID}/related`, options)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("API ERROR GETTING PRODUCT STYLES FOR ", productID, "=> ", err);
    });
};

module.exports.getReviewMeta = (productID) => {
  return axios
    .get(`${url}/reviews/meta/?product_id=${productID}`, options)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("API ERROR GETTING PRODUCT META FOR ", productID, "=> ", err);
    });
};

// module.exports.getProductQuestions = (productID) => {
//   return axios.get(`${url}/qa/questions/?product_id=${productID}`, options)
//   .then((response) => {return response; })
//   .catch((err) => {console.log('API ERROR GETTING PRODUCT QUESTIONS FOR ', productID, '=> ', err)})
// }

// module.exports.putProductHelpful = (questionID) => {
//   return axios.put(`${url}/qa/questions/${questionID}/helpful`, {options})
//   .then((response) => {return response; })
//   .catch((err) => {console.log('API ERROR PUTING PRODUCT HELPFUL FOR ', questionID, '=> ', err)})
// }

module.exports.questions = (req, res) => {
  axios({
    method: req.method,
    url: url + req.url,
    data: req.body,
    headers: options.headers,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log("API ERROR FOR QUESTIONS", err);
    });
};

module.exports.answers = (req, res) => {
  axios({
    method: req.method,
    url: url + req.url,
    data: req.body,
    headers: options.headers,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log("API ERROR FOR QUESTIONS", err);
    });
};

module.exports.reviews = (req, res) => {
  // console.log("method: ", req.method)
  // console.log("url: ", req.url)

  axios({
    method: req.method,
    url: url + req.url,
    data: req.body,
    headers: options.headers,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log("API ERROR FOR REVIEWS 🤯:", error);
    });
};
