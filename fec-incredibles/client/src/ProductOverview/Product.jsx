import {useState, useEffect} from 'react'
import axios from 'axios'

const Product = ({currentItemID}) => {

  const [productDetails, setProductDetails] = useState()
  const [styles, setStyles] = useState()

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
        console.log(response.data.results)
        setStyles(response.data.results)
      })

    }
  }, [currentItemID])

  if (!productDetails || !styles) {
    return <div> Loading... </div>
  }


  return (
    <div className='widget' id='Product'>
      <p>Product section</p>
      <div>
        <p>product name {productDetails.name}</p>
        <p>product category {productDetails.category}</p>
        <p>product slogan {productDetails.slogan}</p>
        <p>product description {productDetails.description}</p>
        <p>product price {productDetails.default_price}</p>
      </div>
      <div>
        <ul>
          {styles.map((style, index) => (
            <li key={index}>
              <p>is default style? {style.default}</p>
              <p>style name{style.name}</p>
              <p>style original_price{style.original_price}</p>
              <p>style photos{JSON.stringify(style.photos[0])}</p>
              <p>style sale_price{style.sale_price}</p>
              <p>style skus{JSON.stringify(style.skus)}</p>
              <p>style id{style.style_id}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default Product