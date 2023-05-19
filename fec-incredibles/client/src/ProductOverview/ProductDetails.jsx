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
			<h2>{productDetails.category}</h2>
			<hr/>
			<h1>{productDetails.name}</h1>
			<hr/>

			{stylePrice ? (
				salePrice ? (
					<>
						<h3 style={{ 'textDecoration': 'line-through', }}>product price {defaultPrice}</h3>
						<h3 style={{ 'color' : 'red' }}>sale price {salePrice}</h3>
					</>
				) : (<h3>style price {stylePrice} </h3>)
			) : (<h3> product price {defaultPrice} </h3>)}

			<br />
		</div>
	);
};

export default ProductDetails;
