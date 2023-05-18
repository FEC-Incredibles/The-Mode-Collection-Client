import React, { useState } from "react";

export default function MoreDetails({ ComparedFeatures }) {
  let [showFeatures, setShowFeatures] = useState(null);
  let featureNames = Object.keys(ComparedFeatures);
  return (
    <div className="moreDetails">
      <p>Something specefic to the reason</p>
      <div className="title row">
        <h4>Current Item</h4>
        <h4>Feature</h4>
        <h4>Comparison Item</h4>
      </div>
      <br></br>
      <style>{}</style>
      {featureNames.map((key) => {
        return (
          <div className="data row" key={key}>
            <p>{ComparedFeatures[key][0] && ComparedFeatures[key][0]}</p>
            <p>{key}</p>
            <p>{ComparedFeatures[key][1] && ComparedFeatures[key][1]}</p>
          </div>
        );
      })}
    </div>
  );
}
