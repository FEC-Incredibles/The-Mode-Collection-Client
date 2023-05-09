import { useState, useEffect } from "react";

const ProductDetails = ({ productDetails, selectedStyleData }) => {
	const defaultPrice = productDetails.default_price;
	const stylePrice = selectedStyleData.original_price;
	const salePrice = selectedStyleData.sale_price;
	console.log(
		`default price: ${defaultPrice} style specific price ${stylePrice} sale price ${salePrice}`
	);
	return (
		<div>
			<p>product name {productDetails.name}</p>
			<p>product category {productDetails.category}</p>
			{stylePrice ? (
				salePrice ? (
					<>
						<p style={{
							'textDecoration': 'line-through',

					}}>product price {defaultPrice}</p>
						<p style={{
							'color' : 'red'
						}}>sale price {salePrice}</p>
					</>
				) : (
					<p>style price {stylePrice} </p>
				)
			) : (
				<p> product price {defaultPrice} </p>
			)}
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
