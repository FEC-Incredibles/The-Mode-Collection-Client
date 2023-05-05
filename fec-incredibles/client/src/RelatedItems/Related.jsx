import React from "react";
import Card from "./Card.jsx";
import relatedProducts from "./ExampleData/relatedProducts.json";

const Related = ({ currentItemID }) => {
  return (
    <div className="relatedProducts">
      {relatedProducts.map(((item, index) => {
        return <Card item={item} key={index}/>
      }))}
    </div>
  );
};

export default Related;
