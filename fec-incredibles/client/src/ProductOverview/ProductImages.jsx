import { useState, useEffect } from "react";
import ExtraImages from './ExtraImages.jsx'
import LeftArrowIcon from '../SVGs/LeftArrowIcon.jsx'
import RightArrowIcon from '../SVGs/RightArrowIcon.jsx'


const ProductImages = ({ selectedStyleData }) => {
	const [selectedImage, setSelectedImage] = useState();
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)
	const [expandedView, setExpandedView] = useState(false)

	const toggleExpandedView = (e) => {
		e.stopPropagation();
		setExpandedView(!expandedView);
	}
	const turnOffExpandedView = () => {
		setExpandedView(false)
	}
	window.addEventListener('click', turnOffExpandedView)

	useEffect(() => {
		selectedStyleData.photos[0].url ? setSelectedImage(selectedStyleData.photos[0].url) : setSelectedImage("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
	}, [selectedStyleData.photos]);
//index plus selected image index
// so like 0 + 0 = first image, 0 + 1 = second image,
//	2 + 4 = 6th image
	return (
		<div id="imageContainer">
			<ExtraImages photos={selectedStyleData.photos} selectedImage={selectedImage} setSelectedImage={setSelectedImage} setSelectedImageIndex={setSelectedImageIndex} selectedImageIndex={selectedImageIndex}/>
			{selectedImageIndex > 0 ? <div className="image-arrow-left" onClick={() => {console.log('left arrow was clicked'); setSelectedImageIndex(selectedImageIndex - 1); setSelectedImage(selectedStyleData.photos[selectedImageIndex].url)}}>
				<LeftArrowIcon/>
			</div> : null}
			{selectedImageIndex < selectedStyleData.photos.length - 1 ? <div className="image-arrow-right" onClick={() => {console.log('right arrow was clicked'); setSelectedImageIndex(selectedImageIndex + 1); setSelectedImage(selectedStyleData.photos[selectedImageIndex].url)}}>
			<RightArrowIcon />
			</div> : null}
			{/* main image */}
			<img className='images-main' src={selectedImage} onClick={toggleExpandedView}></img>
			{expandedView && (
				<div className='modal' onClick={toggleExpandedView}>
					<div className='modal-content'>
						<button onClick={toggleExpandedView}> ❌ </button>
						<img src={selectedImage}></img>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductImages;
