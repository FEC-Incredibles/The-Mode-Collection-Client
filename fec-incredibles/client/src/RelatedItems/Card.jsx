import React, { useState, useEffect } from "react";

export default function Card({ item }) {
  const [renderStars, setRenderStars] = useState([]);
  useEffect(() => {
    for (var i = 0; i < 5; i++) {
      item.stars > i
        ? setRenderStars(() => {[...renderStars, "&star;"]})
        : setRenderStars(() => {[...renderStars, "&star;"]});
    }
  }, []);
  return (
    <div className="Card">
      {item.starred ? <h2>am star</h2> : <h2>am not star</h2>}
      <img src={item.imgURL} />
      <h3>{item.category}</h3>
      <h2>{item.productData}</h2>
      <h3>{item.price}</h3>
      <div className="starts">
        <h3>Stars Place holder &star;</h3>
        {/* {renderStars.map((element) => {
          <p>this works</p>;
          {
            element;
          }
        })} */}
      </div>
    </div>
  );
}
