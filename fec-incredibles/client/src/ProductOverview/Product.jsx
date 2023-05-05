import {useState, useEffect} from 'react'
import axios from 'axios'

const Product = ({currentItemID}) => {

  const [productDetails, setProductDetails] = useState()
  const [syles, setStyles] = useState()

  useEffect (() => {
    if (currentItemID) {
      axios.get(`/products/${currentItemID}`)
        .then((response) => {
          setProductDetails(response.data);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [currentItemID])

  if (!productDetails) {
    return <div> Loading... </div>
  }

  return (
    <div className='widget' id='Product'>
      <p>this is the Product section</p>
      <div>
        <p>this is the product name {productDetails.name}</p>
        <p>this is the product category {productDetails.category}</p>
        <p>this is the product slogan {productDetails.slogan}</p>
        <p>this is the product description {productDetails.description}</p>
        <p>this is the product price {productDetails.default_price}</p>
      </div>
    </div>
  )
}


export default Product