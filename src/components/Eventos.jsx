import React, {useState} from 'react'

const Eventos = () => {
const [contador, setContador]=useState(0)

const handleIncrement =()=> {
    setContador(contador + 1)
}
const handleDecrement =()=> {
    setContador(contador - 1)
}
const handleReset =()=> {
    setContador(0)
}
  return (
    <div>
      <h2>Eventos en componentes</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleReset}>Reset</button>
      </nav>
    </div>
  )
  
}


export default Eventos
