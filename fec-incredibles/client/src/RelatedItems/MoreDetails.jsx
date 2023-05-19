import React, { useState } from "react";

export default function MoreDetails({
  detailId,
  relatedProducts,
  setdetailsId,
}) {
  function getFeatures(id) {
    for (var i = 0; i < relatedProducts.length; i++) {
      if (relatedProducts[i]["id"] === id) {
        return relatedProducts[i]["comparedFeatures"];
      }
    }
  }
  let ComparedFeatures = getFeatures(detailId);
  let featureNames = Object.keys(ComparedFeatures);
  return (
    <div className="moreDetails">
      <i
        className="fa-solid fa-x starred"
        style={{ color: "#e8e6e3" }}
        onClick={() => {
          setdetailsId(0);
        }}
      ></i>
      <div className="title row">
        <h4 style={{textAlign: 'left'}}>Current Item</h4>
        <h4 style={{textAlign: 'center'}}>Feature</h4>
        <h4 style={{textAlign: 'right'}}>Comparison Item</h4>
      </div>
      <div style={{height: '50px'}}></div>
      {featureNames.map((key) => {
        return (
          <div className="data row" key={key}>
            <p style={{textAlign: 'left'}}>{ComparedFeatures[key][0] && ComparedFeatures[key][0]}</p>
            <p style={{textAlign: 'center'}}>{key}</p>
            <p style={{textAlign: 'right'}}>{ComparedFeatures[key][1] && ComparedFeatures[key][1]}</p>
          </div>
        );
      })}
    </div>
  );
}
