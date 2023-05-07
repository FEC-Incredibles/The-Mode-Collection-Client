import {useState, useEffect} from 'react'

const ProductDetails = ({productDetails}) => {
  console.log(productDetails)
  return (
    <div>
      <p>product name {productDetails.name}</p>
      <p>product category {productDetails.category}</p>
      <p>product slogan {productDetails.slogan}</p>
      <p>product description {productDetails.description}</p>
      <p>product price {productDetails.default_price}</p>
    </div>
  )
}

export default ProductDetails