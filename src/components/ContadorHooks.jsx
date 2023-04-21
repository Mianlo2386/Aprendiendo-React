import React, {useState} from 'react'

const ContadorHooks = (props) => {
    const [contador, setContador] = useState(0);
    //console.log(useState())

    const sumar =()=> {
        setContador(contador + 1)
    }
    const restar =()=> {
        setContador(contador - 1)
    }
    const resetear =()=> {
        setContador(0)
    }
  return (
    <div>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>Incrementar</button>
        <button onClick={restar}>Decrementar</button>
        <button onClick={resetear}>Reset</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
    </div>
  )
}

export default ContadorHooks

ContadorHooks.defaultProps = {
    titulo: 'Clicks'
}
