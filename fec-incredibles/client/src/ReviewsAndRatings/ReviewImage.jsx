import React, { useState } from 'react';

const ReviewImage = ({ photo }) => {

  const [modalMode, setModalMode] = useState(false);

  const toggleExpandImage = () => {
    setModalMode(!modalMode);
  }

  return (
    <>
      <img
        className="review-img"
        src={photo.url}
        alt={`Photo ${photo.id}`}
        onClick={toggleExpandImage}
      />

      {modalMode && (
        <div className="modal">
          <div className="modal-content">
            <button className="btn-close" onClick={toggleExpandImage}>
            <i className="fa-solid fa-xmark fa-2xl"></i> </button>
            <img
              src={photo.url}
              alt={`Photo ${photo.id}`}
              onClick={toggleExpandImage}
            />
          </div>
        </div>
      )}
    </>
  )



}

export default ReviewImage;