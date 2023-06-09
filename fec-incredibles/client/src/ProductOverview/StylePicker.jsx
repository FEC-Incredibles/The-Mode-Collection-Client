import { useState } from "react";

const StylePicker = ({ selectedStyleData, styles, setter}) => {
	// console.log("currently selected style => ", selectedStyleData);
	// console.log("full list of styles => ", styles);
	// const [selectedStyle, setSelectedStyle] = useState(selectedStyleData)

	return (
		<ul className='stylesContainer'>
			{/* limit it to 4 and then have it create a new row */}
			{styles.map((style, index) => (
				<li
				key={index}
				onClick={(e) => {
					setter(style);
				}}
				>
					<br/>
					<img className={`images-styles ${selectedStyleData === style && "selected"}`}
						src={
							style.photos[0].thumbnail_url
								? style.photos[0].thumbnail_url
								: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
						}
					></img>
				</li>
			))}
		</ul>
	);
};

export default StylePicker;
