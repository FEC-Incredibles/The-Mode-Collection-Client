import React from "react";
import Card from "./Card.jsx";
import relatedProducts from "./ExampleData/relatedProducts.json";

const Related = ({ currentItemID }) => {
  return (
    <div className="widget" id="relatedProducts">
      <div className="relatedCarousel" style={{ transform: "translateX(-0%)"}}>
        <div className="viewPort">
          {relatedProducts.map((item, index) => {
            return <Card item={item} key={index} width={"100%"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Related;
