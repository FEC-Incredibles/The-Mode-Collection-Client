import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails.jsx";
import StylePicker from "./StylePicker.jsx";
import ProductImages from "./ProductImages.jsx";
import AddToOutfit from "./AddToOutfit.jsx";
import StarRating from '../StarRating.jsx'
import ProductDetailsExtra from './ProductDetailsExtra.jsx';


const Product = ({ currentItem, averageRating, outfit, setOutfit, reviews}) => {
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
		<div className="widget" id="product">
			<div className="product-details-container">
			<ProductImages selectedStyleData={selectedStyle} />
				<div className="flex-col">
					<div className="flex-row">
						<StarRating rating={averageRating}/>
						<a id='reviews-link' href="#review-module"> read all {reviews} reviews</a>
					</div>
					<ProductDetails productDetails={currentItem} selectedStyleData={selectedStyle} />
					<div className="product-style-container">
						<h3 data-testid='style'>STYLE →{selectedStyle.name}</h3>
						<StylePicker selectedStyleData={selectedStyle} styles={styles} setter={setSelectedStyle} />
						<AddToOutfit selectedStyleData={selectedStyle} outfit={outfit} setOutfit={setOutfit}/>
						<ul className="flex-row">
							<li className="share"><a className="share-icon" href="http://twitter.com/share?text=[title]"><i className="fa-brands fa-twitter"></i></a></li>
							<li className="share"><a className="share-icon" href="http://www.facebook.com/sharer.php?u=/node/[nid]&p=[title]"><i className="fa-brands fa-facebook"></i></a></li>
							<li className="share"><a className="share-icon" href="http://pinterest.com/pin/create/button/?url=/node/[nid]&description=[title]"><i className="fa-brands fa-pinterest"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
			<ProductDetailsExtra productDetails={currentItem}/>
		</div>
	);
};

export default Product;
