import {useState} from 'react'

const AddToOutfit = ({data}) => {

  return (
    <div id='AddToOutfit'>
      <p>style skus{JSON.stringify(data.skus)}</p>
    </div>
  )
}

export default AddToOutfit