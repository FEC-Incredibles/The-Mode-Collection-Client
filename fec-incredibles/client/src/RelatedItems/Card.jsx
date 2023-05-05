import React, { useState, useEffect } from "react";

export default function Card({ item }) {
  const [renderStars, setRenderStars] = useState([]);
  useEffect(() => {
    for (var i = 0; i < 5; i++) {
      item.stars > i
        ? setRenderStars(() => {
            [...renderStars, "&star;"];
          })
        : setRenderStars(() => {
            [...renderStars, "&star;"];
          });
    }
  }, []);
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
          <h3>⭐️⭐️⭐️⭐️★</h3>
        </div>
      </div>
    </div>
  );
}
