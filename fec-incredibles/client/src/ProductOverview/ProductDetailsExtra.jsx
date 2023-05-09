import React from "react";

const ProductDetailsExtra = ({ productDetails }) => {
	return (
		<div>
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
		</div>
	);
};

export default ProductDetailsExtra