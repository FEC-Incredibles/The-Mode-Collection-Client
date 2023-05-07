import {useState, useEffect} from 'react'
import axios from 'axios'
import ProductDetails from './ProductDetails.jsx'
import StylePicker from './StylePicker.jsx'
import ProductImages from './ProductImages.jsx'
import AddToOutfit from './AddToOutfit.jsx'

const Product = ({currentItemID}) => {

  const [productDetails, setProductDetails] = useState()
  const [styles, setStyles] = useState()
  const [selectedStyle, setSelectedStyle] = useState()

  useEffect (() => {
    if (currentItemID) {
      axios.get(`/products/${currentItemID}`)
      .catch((err) => {
        console.log('ERROR LOADING COMPONENT => ', err)
      })
      .then((response) => {
        setProductDetails(response.data);
        return axios.get(`/products/${currentItemID}/styles`)
      })
      .then((response) => {
        setStyles(response.data.results)
        const [defaultStyle] = response.data.results.filter((style) => (style['default?'] === true))
        setSelectedStyle(defaultStyle)
      })
    }
  }, [currentItemID])

  if (!productDetails || !styles || !selectedStyle) {
    return <div> Loading... </div>
  }

  return (
    <div className='widget' id='Product'>
      <ProductImages data={selectedStyle}/>
      <ProductDetails productDetails={productDetails}/>
      <StylePicker defaultStyle={selectedStyle} styles={styles} setter={setSelectedStyle}/>
      <AddToOutfit data={selectedStyle}/>
    </div>
  )
}


export default Product