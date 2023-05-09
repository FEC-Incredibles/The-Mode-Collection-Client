import { useState } from "react";

const StylePicker = ({ defaultStyle, styles, setter }) => {
	console.log("currently selected style => ", defaultStyle);
	console.log("full list of styles => ", styles);
	// const [selectedStyle, setSelectedStyle] = useState(defaultStyle)

	const changeStyle = (style) => {
		setter(style);
	};
	return (
		<ul>
			styles:
			{styles.map((style, index) => (
				<li key={index}
				onClick={(e) => {
					changeStyle(style);
				}}>
					<img src={style.photos[0].thumbnail_url}></img>
					<p>style name {style.name}</p>
					<p>style original_price {style.original_price}</p>
					<p>style sale_price {style.sale_price}</p>
				</li>
			))}
		</ul>
	);
};

export default StylePicker;
