import { useState, useEffect } from "react";

const ProductDetails = ({ productDetails, selectedStyleData }) => {
	const defaultPrice = productDetails.default_price;
	const stylePrice = selectedStyleData.original_price;
	const salePrice = selectedStyleData.sale_price;
	// console.log(
	// 	`default price: ${defaultPrice} style specific price ${stylePrice} sale price ${salePrice}`
	// );
	return (
		<div>
			<h1>product name {productDetails.name}</h1>
			<h2>product category {productDetails.category}</h2>
			{stylePrice ? (
				salePrice ? (
					<>
						<h3 style={{
							'textDecoration': 'line-through',

					}}>product price {defaultPrice}</h3>
						<h3 style={{
							'color' : 'red'
						}}>sale price {salePrice}</h3>
					</>
				) : (
					<h3>style price {stylePrice} </h3>
				)
			) : (
				<h3> product price {defaultPrice} </h3>
			)}

			<br />
		</div>
	);
};

export default ProductDetails;
