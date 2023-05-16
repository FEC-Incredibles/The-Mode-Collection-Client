import axios from "axios";
import { useState, useEffect } from "react";

const Outfit = () => {
  return (
    <div className="widget">
      outfit container
    </div>
  )
  // const [outfit, setOutfit] = useState()
  // useEffect( () => {
  //   axios.get('/outfit')
  //   .then((response) => {
  //     console.log(response.data)
  //     // setOutfit(response.data)
  //   })
  //   .catch((err) => {
  //     console.log('ERR => ', err)
  //   })
  // })
  // return (
  //   <div>
  //     {outfit ? <div> JSON.stringify(outfit) </div> : null}
  //   </div>
  // ) 
}

export default Outfit