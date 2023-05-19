import React from "react";

const NavBar = ({currentItemID, setCurrentItemID, typedID, setTypedID}) => {

  return(
    <nav className='flex-row'>
        <h1>current item id</h1>
        <button type="button" onClick={() => { setCurrentItemID(currentItemID - 1) }}> previous</button>
        <h1> {currentItemID}</h1>
        <button type="button" onClick={() => { setCurrentItemID(Number(currentItemID) + 1) }}> next</button>
        <input type="number" onChange={(e) => { setTypedID(e.target.value) }}></input>
        <button type="button" onClick={() => { setCurrentItemID(typedID)  }}> enter specific id</button>
    </nav>
  )
}

export default NavBar