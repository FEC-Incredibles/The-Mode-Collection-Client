import React, { useState, useEffect } from "react";
import MoreDetails from "./MoreDetails.jsx"
import StarRating from "../StarRating.jsx"

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
        <p>{item.productData}</p>
        <h3>{item.price}</h3>
        <div className="stars">
          <h3>
            <StarRating rating={item.stars} />
          </h3>
        </div>
      </div>
      {/* <MoreDetails ComparedFeatures={item.comparedFeatures}/> */}
    </div>
  );
}
