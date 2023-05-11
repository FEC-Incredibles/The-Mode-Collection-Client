import { useState, useEffect } from "react";
import ExtraImages from './ExtraImages.jsx'
import LeftArrowIcon from '../SVGs/LeftArrowIcon.jsx'
import RightArrowIcon from '../SVGs/RightArrowIcon.jsx'


const ProductImages = ({ selectedStyleData }) => {
	const [selectedImage, setSelectedImage] = useState();


	useEffect(() => {
		selectedStyleData.photos[0].url ? setSelectedImage(selectedStyleData.photos[0].url) : setSelectedImage("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
	}, [selectedStyleData.photos]);

	const changeImage = (index) => {
		setSelectedImage(selectedStyleData.photos[index]);
	};

	return (
		<div id="imageContainer">
			<ExtraImages photos={selectedStyleData.photos} setSelectedImage={setSelectedImage}/>

			{/* main image */}
			<img src={selectedImage}></img>
			<p>hey look here arrows!</p>
			<LeftArrowIcon />
			<RightArrowIcon />
		</div>
	);
};

export default ProductImages;
