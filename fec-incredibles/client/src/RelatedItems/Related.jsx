import React, { useState } from "react";
import Card from "./Card.jsx";
import relatedProducts from "./ExampleData/relatedProducts.json";

const Related = ({ currentItemID }) => {
  const [activeItem, setActiveItem] = useState(0);

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
