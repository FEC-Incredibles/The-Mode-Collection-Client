import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails.jsx";
import ProductDetailsExtra from "./ProductDetailsExtra.jsx";
import StylePicker from "./StylePicker.jsx";
import ProductImages from "./ProductImages.jsx";
import AddToOutfit from "./AddToOutfit.jsx";
import StarRating from '../StarRating.jsx'

const Product = ({ currentItem, averageRating }) => {
	const [styles, setStyles] = useState();
	const [selectedStyle, setSelectedStyle] = useState();

	useEffect(() => {
		if (currentItem) {
		axios.get(`/products/${currentItem["id"]}/styles`)
			.catch((err) => {
				console.log("ERROR LOADING COMPONENT => ", err);
			})
			.then((response) => {
				setStyles(response.data.results);
				const [defaultStyle] = response.data.results.filter(
					(style) => style["default?"] === true);
				if (!defaultStyle) {
					setSelectedStyle(response.data.results[0])
				} else {
					setSelectedStyle(defaultStyle);
				}
			});
		}
	}, [currentItem]);

	if (!styles || !selectedStyle) {
		return <div> Loading... (if product takes too long to load then it may be unavailable) </div>;
	}

	return (
		<div className="widget" id="Product">
			<StarRating rating={averageRating}/>
			<ProductImages selectedStyleData={selectedStyle} />
			<ProductDetails productDetails={currentItem} selectedStyleData={selectedStyle} />
			<h2>STYLE => {selectedStyle.name}</h2>
			<StylePicker
				selectedStyleData={selectedStyle}
				styles={styles}
				setter={setSelectedStyle}
			/>
			<AddToOutfit selectedStyleData={selectedStyle} />
			<ProductDetailsExtra productDetails={currentItem}/>
		</div>
	);
};

export default Product;
