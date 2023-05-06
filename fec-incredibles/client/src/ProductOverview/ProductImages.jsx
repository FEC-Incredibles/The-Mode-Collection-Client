import {useState} from 'react'

const ProductImages = ({styles, defaultStyle, setter}) => {
  console.log(defaultStyle)
  const [selectedImage, setSelectedImage] = useState(defaultStyle.photos[0])

  const changeImage = (index) => {
    setSelectedImage(defaultStyle.photos[index])
  }

  return (
    <div id='images' >
      {/* main image */}
      <img src={selectedImage.url}></img>

      {/* additional row of images */}
      <ul>
        {defaultStyle.photos.map((photo, index) => (
          <li key={index}>
            <img onClick={(e) => {changeImage(index)} }src={photo.thumbnail_url}></img>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default ProductImages