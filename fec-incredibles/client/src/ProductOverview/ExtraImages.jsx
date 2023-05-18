import {useState} from "react";
import UpArrowIcon from '../SVGs/UpArrowIcon.jsx'
import DownArrowIcon from '../SVGs/DownArrowIcon.jsx'

const ExtraImages = ({ photos, setSelectedImage, selectedImage, setSelectedImageIndex, startWindow, endWindow, moveWindowUp, moveWindowDown }) => {
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
					<div className="flex-col">
						{/* {selectedImageIndex !== 0 || activeWindow !== 0 ?  <UpArrowIcon CSSclass='centered' clickEvent={() => {setActiveWindow(activeWindow - 1)}}/> : null}
						<div className="images-extra-carousel" >
							{photos.map((photo, index) => (
								<img key={index} className="images-extra" style={{ transform: `translateY(-${activeWindow * 48}px)` }} onClick={(e) => {setSelectedImage(photo.url); setSelectedImageIndex(index)}} src={photo.url}></img>
							))}
						</div>
						{selectedImageIndex < photos.length-1 ? <DownArrowIcon CSSclass='centered' clickEvent={() => {setActiveWindow(activeWindow + 1)}}></DownArrowIcon> : null} */}
						{startWindow === 0 ? (
							<UpArrowIcon CSSclass='hidden' />
						) : (
							<UpArrowIcon CSSclass='centered' clickEvent={moveWindowUp}/>
							)}
						{photos.slice(startWindow, endWindow).map((photo, index) => (
							<img
							key={index}
							className={`images-extra ${selectedImage === photo.url && "selected"}`}
							onClick={(e) => {
								setSelectedImage(photo.url);
								setSelectedImageIndex((prevIndex) => (startWindow + index))
							}}
							src={photo.url}
							></img>
							))}
						{endWindow === photos.length ? (
							<DownArrowIcon CSSclass='hidden'/>
						) : (
							<DownArrowIcon CSSclass='centered' clickEvent={moveWindowDown}/>
							)}
					</div>
				)
			) : null}
		</div>
	);
};

export default ExtraImages