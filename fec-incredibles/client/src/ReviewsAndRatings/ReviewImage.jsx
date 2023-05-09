import React from 'react';

const ReviewImage = ({ photo }) => {

  const handleExpandImage = (e) => {
    // TODO:  open the image in a modal window
    // console.log(e.target.src);
  }

  return (
    <img
    className="review-img"
    src={photo.url}
    alt={`Photo ${photo.id}`}
    onClick={handleExpandImage}
  />
  )
}

export default ReviewImage;