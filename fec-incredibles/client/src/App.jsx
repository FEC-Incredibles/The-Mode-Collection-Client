import React, { useState, useEffect } from "react";
import Axios from "axios";
import Product from "./ProductOverview/Product.jsx";
import Questions from "./QuestionsAndAnswers/Questions.jsx";
import Related from "./RelatedItems/Related.jsx";
import Reviews from "./ReviewsAndRatings/Reviews.jsx";

import { getAvgRating } from "./ReviewsAndRatings/helper.js";
import { emptyMeta } from "./ReviewsAndRatings/exampleData.js";

const App = () => {
  const [currentItemID, setCurrentItemID] = useState();
  const [allProducts, setAllProducts] = useState();
  const [typedID, setTypedID] = useState();
  const [currentAvgRating, setCurrentAvgRating] = useState(0);
  const [currentReviewsMeta, setCurrentReviewsMeta] = useState(emptyMeta);

  useEffect(() => {
    Axios.get("/products").then((response) => {
      let randomIndex = Math.floor(Math.random() * 50);
      setCurrentItemID(response.data[randomIndex].id);
    });
  }, []);

  useEffect(() => {
    if (currentItemID) {
      Axios.get(`/reviews/meta/?product_id=${currentItemID}`)
        .then((response) => {
          // console.log('Reviews metadata: ', response.data)
          let avgRating = getAvgRating(response.data);
          setCurrentAvgRating(avgRating);
          setCurrentReviewsMeta(response.data);
        })
        .catch((error) =>
          console.log("Error getting metadata at home page 🫠", error)
        );
    }
  }, [currentItemID]);

  return (
    <div id="main">
      {/* <nav style={{ display: "flex" }}>
        <h1>current item id {currentItemID}🤯</h1>
        <button
          type="button"
          onClick={() => {
            setCurrentItemID(currentItemID - 1);
          }}
        >
          previous
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentItemID(Number(currentItemID) + 1);
          }}
        >
          next
        </button>
        <input
          type="text"
          onChange={(e) => {
            setTypedID(e.target.value);
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            setCurrentItemID(typedID);
          }}
        >
          enter specific id
        </button>
      </nav> */}
      <div id="infoGrid">
        <div id="logoCard">
          <h1>Mode mode mode</h1>
        </div>
        <Product currentItemID={currentItemID} />
        <Related currentItemID={currentItemID} module={"related"} />
        <Questions currentItemID={currentItemID} />
        <Related currentItemID={currentItemID} module={"outfit"} />
        <Reviews
          currentItemID={currentItemID}
          avgRating={currentAvgRating}
          reviewsMeta={currentReviewsMeta}
        />
      </div>
    </div>
  );
};

export default App;
