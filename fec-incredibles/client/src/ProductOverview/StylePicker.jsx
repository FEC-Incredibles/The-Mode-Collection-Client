import {useState} from 'react'

const StylePicker = ({styles}) => {
  console.log(styles)
  return (
    <ul>
      {styles.map((style, index) => (
        <li key={index}>
          <p>style name {style.name}</p>
          {/* <p>style original_price {style.original_price}</p>
          <p>style sale_price {style.sale_price}</p>
          <p>style id {style.style_id}</p> */}
        </li>
      ))}
    </ul>
  )
}

export default StylePicker