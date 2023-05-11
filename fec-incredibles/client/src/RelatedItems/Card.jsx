import React, { useState, useEffect } from "react";

export default function Card({ item }) {
  let filledStar = "☆";
  let emptyStar = "★";
  return (
    <div className="Card">
      {item.starred ? (
        <h2 className="starred">⭐️</h2>
      ) : (
        <h2 className="starred">★</h2>
      )}
      <img src={item.imgURL} />
      <div className="info">
        <h3>{item.category}</h3>
        <h2>{item.productData}</h2>
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
