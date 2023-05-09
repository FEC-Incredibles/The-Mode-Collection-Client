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
		</div>
	);
};

export default ProductDetails;
