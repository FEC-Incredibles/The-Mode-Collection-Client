import { useState, useEffect } from "react";
import ExtraImages from './ExtraImages.jsx'
import LeftArrowIcon from '../SVGs/LeftArrowIcon.jsx'
import RightArrowIcon from '../SVGs/RightArrowIcon.jsx'


const ProductImages = ({ selectedStyleData }) => {
	const [selectedImage, setSelectedImage] = useState();
	const [expandedView, setExpandedView] = useState(false)

	const toggleExpandedView = () => {
		setExpandedView(!expandedView);
	}

	useEffect(() => {
		selectedStyleData.photos[0].url ? setSelectedImage(selectedStyleData.photos[0].url) : setSelectedImage("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
	}, [selectedStyleData.photos]);

	const changeImage = (index) => {
		setSelectedImage(selectedStyleData.photos[index]);
	};

	return (
		<div id="imageContainer">
			<ExtraImages photos={selectedStyleData.photos} setSelectedImage={setSelectedImage}/>

			<div style={{'position': 'absolute', 'zIndex':'2'}}>
				<LeftArrowIcon />
				<RightArrowIcon />
			</div>
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
