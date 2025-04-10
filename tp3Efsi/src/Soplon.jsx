import React, { useState } from 'react'

export default function Soplon() 
{
  let [aux, setAux] = useState(0);
const handleChange = (e) =>{
  setAux(e.target.value);
}

    return (
      <>
      <input type="text" onChange={handleChange} />
      {}
      <p>{aux}</p>
      <button ></button>
      </>
    
  )
}
