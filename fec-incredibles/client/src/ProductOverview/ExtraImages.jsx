import {useState} from "react";
import UpArrowIcon from '../SVGs/UpArrowIcon.jsx'
import DownArrowIcon from '../SVGs/DownArrowIcon.jsx'

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
									setSelectedImage(photo.url);
								}}
								src={photo.url}
							></img>
						))}
					</div>
				) : (
					<div style={{ display: "flex", flexDirection: "column", justifyContent:'center'}}>
						{startWindow === 0 ? null : (
							<UpArrowIcon CSSclass='centered' clickEvent={() => {
								setStartWindow(startWindow - 1);
								setEndWindow(endWindow - 1);
							}}/>
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
							<DownArrowIcon CSSclass='centered' clickEvent={() => {
								setStartWindow(startWindow + 1);
								setEndWindow(endWindow + 1);
							}}/>
						)}
					</div>
				)
			) : null}
		</div>
	);
};

export default ExtraImages