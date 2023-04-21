import React from 'react'

const MasSobreEventos = () => {
    const handleClick = (e, mensaje) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }
    /* function Boton (props) {
        return(
            <button onClick={props.myOnClick}>Botón hecho Componente</button>
        )
    } */
    /* Forma resumida */
    const Boton = ({myOnClick})=> (
        <button onClick={myOnClick}>Botón hecho componente</button>
    )
  return (
    <div>
      <h3>Mas Sobre Eventos</h3>
      <button onClick={(e)=>handleClick(e,'Hola, estoy pasando un parametro desde un evento')}>Saludar</button>
      {/* Evento Personalizado */}
      <Boton myOnClick={(e)=>handleClick(e,'Hola, estoy pasando un parametro desde un evento pero con mi propio evento personalizado')}/>
    </div>
  )
}

export default MasSobreEventos
