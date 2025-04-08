import React from 'react'

export default function BtnReinicioConsola() {
    const reiniciarConsola = () =>{
        console.clear();
    }
  return (
    <button onClick={reiniciarConsola}>Reiniciar consola</button>
  )
}
