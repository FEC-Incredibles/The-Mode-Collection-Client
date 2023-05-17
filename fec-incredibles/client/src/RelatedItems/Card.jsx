import React, { useState, useEffect } from "react";

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
        <h3>{item.category}</h3>
        <p>{JSON.stringify(item.comparedFeatures)}</p>
        <h3>{item.productData}</h3>
        <h3>{item.price}</h3>
        <div className="stars">
          <h3>
            {filledStar.repeat(item.stars) + emptyStar.repeat(5 - item.stars)}
          </h3>
        </div>
      </div>
    </div>
  );
}
