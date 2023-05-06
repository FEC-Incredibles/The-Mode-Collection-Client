import {useState} from 'react'

const ProductDetails = ({data}) => {

  return (
    <div>
      <h1>product name {data.name}</h1>
      <h2>product category {data.category}</h2>
      <h3>product price {data.default_price}</h3>
      <p>product slogan {data.slogan}</p>
      <p>product description {data.description}</p>
    </div>
  )
}

export default ProductDetails