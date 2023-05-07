import {useState, useEffect} from 'react'

const ProductImages = ({data}) => {
  console.log(data.photos)
  const [selectedImage, setSelectedImage] = useState(data.photos[0])

  useEffect( () => {
    setSelectedImage(data.photos[0])
  }, [data.photos])
  const changeImage = (index) => {
    setSelectedImage(data.photos[index])
  }

  return (
    <div id='images' >
      {/* main image */}
      <img src={selectedImage.url}></img>

      {/* additional row of images */}
      <ul>
        {data.photos.map((photo, index) => (
          <li key={index}>
            <img onClick={(e) => {changeImage(index)} }src={photo.thumbnail_url}></img>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default ProductImages