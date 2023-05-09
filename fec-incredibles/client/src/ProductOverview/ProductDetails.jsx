import { useState, useEffect } from "react";

const ProductDetails = ({ productDetails }) => {
	// console.log(productDetails);
	return (
		<div>
			<p>product name {productDetails.name}</p>
			<p>product category {productDetails.category}</p>
			<p>product price {productDetails.default_price}</p>
			<br />
			<br />
			<p>
				product slogan <br />
				{productDetails.slogan}
			</p>
			<br />
			<p>
				product description <br />
				{productDetails.description}
			</p>
			<br />
			<p>features</p>
			{productDetails.features.map((thing, index) => (
				<p key={index}>
					{thing.feature} | {thing.value}
				</p>
			))}
			<br />
		</div>
	);
};

export default ProductDetails;
