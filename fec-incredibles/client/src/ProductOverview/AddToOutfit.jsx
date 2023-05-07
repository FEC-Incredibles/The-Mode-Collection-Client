import {useState, useEffect} from 'react'

const AddToOutfit = ({data}) => {

  console.log('skus => ', data.skus)
  const [size, setSelectedSize] = useState('')
  const [quantity, setSelectedQuantity] = useState('')

  const handleAdditionToOutift = (event) => {
    event.preventDefault()
    console.log(event)
  }

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value)
  }

  const generateList = (total) => {
    const max = 15;
    return total === 0 ? ['OUT OF STOCK'] : total > max ? Array.from(max, (_, i) => (i + 1)) : Array.from(total, (_, i) => (i + 1))
  }

  /**
   * !when user selects a size
   * i need to see that size's quantity and then update the other select drop down menu
   * call generate list with the quantity i got from that size
   *  generate list takes care of the logic for "if theres more than 15 then limit the user to 15 of that item, if theres less than 15 then limit the user to however many available in stock, and finally if theres nothing in stock then it should display OUT OF STOCK"
   */

  return (
    <form onSubmit={handleAdditionToOutift} id='AddToOutfit'>
      <label htmlFor='size'>Select a size</label>
      <select id='size' name='size' onChange={handleSizeChange}>
        <option value='select a size'>select a size</option>
        {Object.keys(data.skus).map((skuid) => (
            <option key={skuid} value={data.skus[skuid].size}>{data.skus[skuid].size}</option>
        ))}
      </select>
      {/* <label htmlFor='quantity'>Select a quantity</label>
      <select id='quantity' name='quantity'>
        {generateList().map((val, index) => (
          <option key={index}>{val}</option>
        ))}
      </select> */}
      <button type='submit'></button>
    </form>
  )
}

export default AddToOutfit