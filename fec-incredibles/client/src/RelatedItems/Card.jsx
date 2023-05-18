import React, { useState, useEffect } from "react";
import MoreDetails from "./MoreDetails.jsx"

export default function Card({ item }) {
  let filledStar = "☆";
  let emptyStar = "★";
  return (
    <div className="Card">
      {item.starred ? (
        <p className="starred">⭐️</p>
      ) : (
        <p className="starred">★</p>
      )}
      <img src={item.imgURL} />
      <div className="info">
        <h2 style={{"fontSize": "28px"}}>{item.category}</h2>
        <h3>{item.productData}</h3>
        <h3>{item.price}</h3>
        <div className="stars">
          <h3>
            {filledStar.repeat(item.stars) + emptyStar.repeat(5 - item.stars)}
          </h3>
        </div>
      </div>
      <MoreDetails ComparedFeatures={item.comparedFeatures}/>
    </div>
  );
}
