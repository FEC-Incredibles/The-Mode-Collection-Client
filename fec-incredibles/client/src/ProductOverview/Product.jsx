import {useState, useEffect} from 'react'
import axios from 'axios'
import ProductDetails from './ProductDetails.jsx'
import StylePicker from './StylePicker.jsx'
import ProductImages from './ProductImages.jsx'

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
      <ProductImages styles={styles} defaultStyle={selectedStyle} setter={setSelectedStyle}/>
      <ProductDetails data={productDetails}/>
      <StylePicker styles={styles}/>
    </div>
  )
}


export default Product