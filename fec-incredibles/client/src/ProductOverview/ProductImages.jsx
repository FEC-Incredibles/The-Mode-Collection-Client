import { useState, useEffect } from "react";

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
			{selectedStyleData.photos.map((photo, index) => (
				<div className="images-row" key={index}>
					<img
						className="images-extra"
						onClick={(e) => {
							changeImage(index);
						}}
						src={photo.thumbnail_url}
						></img>
				</div>
			))}

			{/* main image */}
			<img src={selectedImage.url ? selectedImage.url : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}></img>
		</div>
	);
};

export default ProductImages;
