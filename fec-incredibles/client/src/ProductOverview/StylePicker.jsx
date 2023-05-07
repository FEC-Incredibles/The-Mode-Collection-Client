import {useState} from 'react'

const StylePicker = ({defaultStyle, styles, setter}) => {
  console.log('currently selected style => ', defaultStyle)
  console.log('full list of styles => ', styles)
  // const [selectedStyle, setSelectedStyle] = useState(defaultStyle)

  const changeStyle = (style) => {
    setter(style)
  }
  return (
    <ul>
      {styles.map((style, index) => (
        <li key={index}>
          <p onClick={(e) => { changeStyle(style) }}>style name {style.name}</p>
          {/* <p>style original_price {style.original_price}</p>
          <p>style sale_price {style.sale_price}</p>
          <p>style id {style.style_id}</p> */}
        </li>
      ))}
    </ul>
  )
}

export default StylePicker