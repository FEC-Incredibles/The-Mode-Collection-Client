import {useState} from "react";

const ExtraImages = ({ photos, setSelectedImage }) => {
	const [startWindow, setStartWindow] = useState(0);
	const [endWindow, setEndWindow] = useState(4);
	return (
		<div className="images-row">
			{photos.length > 1 ? (
				photos.length < 5 ? (
					<div style={{ display: "flex", flexDirection: "column" }}>
						{photos.map((photo, index) => (
							<img
								key={index}
								className="images-extra"
								onClick={(e) => {
									changeImage(index);
								}}
								src={photo.url}
							></img>
						))}
					</div>
				) : (
					<div style={{ display: "flex", flexDirection: "column" }}>
						{startWindow === 0 ? null : (
							<button className='images-buttons'
								onClick={() => {
									setStartWindow(startWindow - 1);
									setEndWindow(endWindow - 1);
								}}
							>
								/\
							</button>
						)}
						{photos.slice(startWindow, endWindow).map((photo, index) => (
							<img
								key={index}
								className="images-extra"
								onClick={(e) => {
									setSelectedImage(photo.url);
								}}
								src={photo.url}
							></img>
						))}
						{endWindow === photos.length - 1 ? null : (
							<button className='images-buttons'
								onClick={() => {
									setStartWindow(startWindow + 1);
									setEndWindow(endWindow + 1);
								}}
							>
								\/
							</button>
						)}
					</div>
				)
			) : null}
		</div>
	);
};

export default ExtraImages