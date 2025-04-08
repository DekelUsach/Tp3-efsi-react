import React from 'react'

export default function Soplon() 
{
const handleChange = (e) =>{
    console.log(e.target.value)
}
    return (
    <input type="text" onChange={handleChange} />
  )
}
