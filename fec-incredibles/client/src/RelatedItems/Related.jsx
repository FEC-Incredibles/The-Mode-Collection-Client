import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import axios from "axios";

const Related = ({ currentItemID }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (currentItemID) {
      axios({
        method: "get",
        url: `/products/${currentItemID}/related`,
      })
        .then((element) => {
          return axios({
            method: "get",
            url: `/relatedItems/?relatedIDs=${JSON.stringify(element.data)}`,
          });
        })
        .then((element) => {
          console.log(element.data);
          setRelatedProducts(element.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentItemID]);
  const updateItem = (newItem) => {
    if (newItem < 0) {
      newItem = 0;
    } else if (newItem >= relatedProducts.length) {
      newItem = relatedProducts.length - 1;
    }
    setActiveItem(newItem);
  };
  return (
    <div className="widget" id="relatedProducts">
      <h1>Related Products</h1>
      <div className="relatedCarousel">
        <div
          className="viewPort"
          style={{ transform: `translateX(-${activeItem * 100}%)` }}
        >
          {relatedProducts.map((item, index) => {
            return <Card item={item} key={index} width={"100%"} />;
          })}
        </div>
        <button
          id="backClick"
          onClick={() => {
            updateItem(activeItem - 1);
          }}
        >
          Backward
        </button>
        <button
          id="forwardClick"
          onClick={() => {
            updateItem(activeItem + 1);
          }}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default Related;
