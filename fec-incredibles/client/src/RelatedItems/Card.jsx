import React, { useState, useEffect } from "react";
import MoreDetails from "./MoreDetails.jsx";
import StarRating from "../StarRating.jsx";

export default function Card({
  item,
  setCurrentItemID,
  type,
  setOutfit,
  outfit,
}) {
  const [star, setStar] = useState(item.starred);
  return (
    <div className="Card">
      {type === "Related" ? (
        star ? (
          <i
            className="fa-regular fa-star starred"
            onClick={() => {
              setStar(!star);
            }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-star starred"
            style={{ color: "#f9d949" }}
            onClick={() => {
              setStar(!star);
            }}
          ></i>
        )
      ) : (
        <i
          className="fa-solid fa-x starred"
          style={{ color: "#e8e6e3" }}
          onClick={() => {
            let newOutfit = outfit.slice();
            let deleteIndex = outfit.indexOf(item.id);
            newOutfit[deleteIndex] = null;
            newOutfit.push(null);
            setOutfit(newOutfit);
            console.log(outfit);
          }}
        ></i>
      )}
      <img
        src={item.imgURL}
        onClick={() => {
          setCurrentItemID(item.id);
        }}
      />
      <div className="info">
        <h2 style={{ fontSize: "28px" }}>{item.category}</h2>
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
