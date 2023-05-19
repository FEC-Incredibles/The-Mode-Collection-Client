import React, { useState, useEffect } from "react";
import MoreDetails from "./MoreDetails.jsx"
import StarRating from "../StarRating.jsx"

export default function Card({ item , setCurrentItemID, type} ) {
  const [star, setStar] = useState(item.starred);
  return (
    <div className="Card" onClick={() => {
      setCurrentItemID(item.id);
    }}>
      {type === 'Related' && (star ? (
        <i className="fa-regular fa-star starred" onClick={() => {
          setStar(!star);
        }}></i>
      ) : (
        <i className="fa-solid fa-star starred" style={{'color': '#f9d949'}} onClick={() => {
          setStar(!star);
        }}></i>
      ))}
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
