import React, { useState } from 'react'

const ComunicacionComponentes = () => {
    const [contador,setContador] = useState(0)

const incrementarContador = (e) => {
   setContador(contador + 1) 

}

  return (
    <div>
      
      {/* Este seria componente padre */}

      <h2>Comunicación entre Componentes</h2>  
      <p>Contador:<b>{contador}</b></p>
      <Hijo incrementarContador={incrementarContador} mensaje="Mensaje para el hijo 1"/>
      <Hijo incrementarContador={incrementarContador} mensaje="Mensaje para el hijo 2"/>
    </div>
  )
}

export default ComunicacionComponentes

function Hijo(props) {
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
    
    
}