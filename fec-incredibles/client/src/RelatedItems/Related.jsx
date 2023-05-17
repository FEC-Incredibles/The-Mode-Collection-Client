import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import axios from "axios";
import testData from "./ExampleData/relatedProducts.json"

const Related = ({ currentItemID, module }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState(testData);

  useEffect(() => {
    if (currentItemID) {
      axios({
        method: "get",
        url: `/products/${currentItemID}/related`,
      })
        .then((element) => {
          return axios({
            method: "get",
            url: `/relatedItems/?relatedIDs=${JSON.stringify(element.data)}&currentID=${currentItemID}`,
          });
        })
        .then((element) => {
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
    } else if (newItem >= relatedProducts.length / 2) {
      newItem = relatedProducts.length / 2 - 1;
    }
    setActiveItem(newItem);
  };
  return (
    <div className="widget brianWidget" id={module}>
      <h1>Related Products</h1>
      <div className="carouselItems">
        {activeItem > 0 ? (
          <button
            id="backClick"
            className="navButtons"
            onClick={() => {
              updateItem(activeItem - 1);
            }}
          >
            Backward
          </button>
        ) : (
          <button
            id="backClick"
            className="navButtons"
            style={{ visibility: "hidden" }}
          >
            Backward
          </button>
        )}
        <div className="relatedCarousel">
          <div
            className="viewPort"
            style={{ transform: `translateY(-${activeItem * 25}%)` }}
          >
            {relatedProducts.map((item, index) => {
              return <Card item={item} key={index} />;
            })}
          </div>
        </div>
        {(activeItem <= relatedProducts.length / 2 - 1) ? (
          <button
            id="forwardClick"
            className="navButtons"
            onClick={() => {
              updateItem(activeItem + 1);
            }}
          >
            Forward
          </button>
        ) : (
          <button
            id="forwardClick"
            className="navButtons"
            style={{ visibility: "hidden" }}
          >
            Forward
          </button>
        )}
      </div>
    </div>
  );
};

export default Related;
