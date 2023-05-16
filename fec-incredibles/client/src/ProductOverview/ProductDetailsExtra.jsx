import React from "react";

const ProductDetailsExtra = ({ productDetails }) => {
	return (
    <div style={{"margin":'10px', 'padding': '10px'}}>
      <div className="top-half" style={{"display":"flex", "flexDirection":"row", 'width':'60rem', }}>
        <div style={{"display":"flex", "flexDirection":"column", 'width':'30rem', 'justifyContent':"space-evenly"}}>
          <p>{productDetails.slogan}</p>
          <br/>
          <p>{productDetails.description}</p>
        </div>
        <div style={{'width': '40rem', 'alignContent': 'flex-end', 'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'column'}}>
          {productDetails.features.map((thing, index) => (
            <p key={index}>
              {thing.value} {thing.feature}
            </p>
          ))}
        </div>
      </div>
    </div>
	);
};

export default ProductDetailsExtra