import { useState, useEffect } from "react";

//this is the little < & > arrow at the right side of the drop down menu, you can ignore this component
const LeftArrowIcon = () => {
	return (
		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
	);
};
const RightArrowIcon = () => {
	return (
		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
	);
};


const ProductImages = ({ selectedStyleData }) => {
	const [selectedImage, setSelectedImage] = useState(
		selectedStyleData.photos[0]
	);

	useEffect(() => {
		setSelectedImage(selectedStyleData.photos[0]);
	}, [selectedStyleData.photos]);
	const changeImage = (index) => {
		setSelectedImage(selectedStyleData.photos[index]);
	};

	return (
		<div id="imageContainer">

			{/* additional row of images */}
			<div className="images-row" >
			{selectedStyleData.photos.length > 1 ? selectedStyleData.photos.map((photo, index) => (
				<img
					key={index}
					className="images-extra"
					onClick={(e) => {changeImage(index)}}
					src={photo.url}
					></img>
					)) : null}
			</div>

			{/* main image */}
			<img src={selectedImage.url ? selectedImage.url : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}></img>
			<p>hey look here arrows!</p>
				<LeftArrowIcon />
				<RightArrowIcon />
		</div>
	);
};

export default ProductImages;
