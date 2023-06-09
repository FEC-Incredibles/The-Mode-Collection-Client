import { useState, useEffect } from "react";
import ExtraImages from "./ExtraImages.jsx";
import LeftArrowIcon from "../SVGs/LeftArrowIcon.jsx";
import RightArrowIcon from "../SVGs/RightArrowIcon.jsx";

const ProductImages = ({ selectedStyleData }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedView, setExpandedView] = useState(false);
	const [startWindow, setStartWindow] = useState(0)
	const [endWindow, setEndWindow] = useState(4)


	const moveWindowUp = () => {
    setStartWindow(startWindow - 1);
		setEndWindow(endWindow - 1);
	}
	const moveWindowDown = () => {
    setStartWindow(startWindow + 1);
		setEndWindow(endWindow + 1);
	}

  const turnOnExpandedView = (e) => {
    e.stopPropagation();
    setExpandedView(true);
  };
  const turnOffExpandedView = () => {
    setExpandedView(false);
  };

  useEffect(() => {
    window.addEventListener("click", turnOffExpandedView);
    setStartWindow(0)
    setEndWindow(4)
    selectedStyleData.photos[0].url
      ? setSelectedImage(selectedStyleData.photos[0].url)
      : setSelectedImage(
          "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
        );
        return () => {
          window.removeEventListener("click", turnOffExpandedView);
        }
  }, [selectedStyleData.photos]);
  //index plus selected image index
  // so like 0 + 0 = first image, 0 + 1 = second image,
  //	2 + 4 = 6th image
  return (
    <div id="imageContainer">
      <ExtraImages
        photos={selectedStyleData.photos}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setSelectedImageIndex={setSelectedImageIndex}
				startWindow={startWindow}
				endWindow={endWindow}
				moveWindowUp={moveWindowUp}
				moveWindowDown={moveWindowDown}
      />
      {selectedImageIndex > 0 ? (
        <div
          className="image-arrow-left"
          onClick={() => {
            setSelectedImageIndex((previousIndex) => (previousIndex - 1));
            setSelectedImage(selectedStyleData.photos[selectedImageIndex - 1].url);
						if (selectedImageIndex === startWindow) {
							moveWindowUp()
						}
          }}
        >
          <LeftArrowIcon />
        </div>
      ) : null}
      {selectedImageIndex < selectedStyleData.photos.length - 1 ? (
        <div
          className="image-arrow-right"
          onClick={() => {
            setSelectedImageIndex((previousIndex) => (previousIndex + 1));
            setSelectedImage(selectedStyleData.photos[selectedImageIndex + 1].url);
						if (selectedImageIndex === endWindow-1){
							moveWindowDown()
						}
          }}
        >
          <RightArrowIcon />
        </div>
      ) : null}
      {/* main image */}
      <img className="images-main" src={selectedImage} onClick={turnOnExpandedView}></img>

      {/* modal pop up image */}
      {expandedView && (
        <div className="expanded-image-modal">
          <div className="expanded-image-modal-content">
            <img src={selectedImage}></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImages;
