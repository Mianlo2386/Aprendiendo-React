/* import React, { useState, useEffect } from 'react'

const CicloVida = () => {
    console.log(0,"El componente se inicializa. OJO! Que todavia no esta en el DOM")
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [tictac, setTictac] = useState(null)
    
    useEffect(() => {
        console.log(1, "El componente se montó en el DOM")
    
        // Actualizar la hora cada segundo
        const timer = setInterval(() => {
          setHora(new Date().toLocaleTimeString())
        }, 1000)

        setTictac(timer)
    
        // Función de limpieza del efecto
        return () => {
          console.log(2, "El componente se desmontó del DOM")
          clearInterval(timer)
        }
      }, [])

    const iniciar = ()=>{
        // Iniciar el temporizador si no está activo
        if (tictac === null) {
            const timer = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000)
            setTictac(timer)
        }
    }
    
    const detener = ()=>{
        // Detener el temporizador si está activo
        if (tictac !== null) {
            clearInterval(tictac)
            setTictac(null)
        }
    }

  return (
    <div>
      <h2>Ciclo de Vida de los componentes</h2>
      <h3>{hora}</h3>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={detener}>Detener</button>
    </div>
  )
}

export default CicloVida
 */import React, { useState, useEffect } from 'react'

const CicloVida = () => {
   // console.log(0,"El componente se inicializa. OJO! Que todavia no esta en el DOM")
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [tictac, setTictac] = useState(null)
    const [mostrarReloj, setMostrarReloj] = useState(false)
  
    useEffect(() => {
      //console.log(1, "El componente se montó en el DOM")
  
      // Actualizar la hora cada segundo
      const timer = setInterval(() => {
        setHora(new Date().toLocaleTimeString())
      }, 1000)
  
      setTictac(timer)
  
      // Función de limpieza del efecto
      return () => {
        //console.log(2, "El componente se desmontó del DOM")
        clearInterval(timer)
      }
    }, [])
  
    const iniciar = () => {
      // Iniciar el temporizador si no está activo
      if (tictac === null) {
        const timer = setInterval(() => {
          setHora(new Date().toLocaleTimeString())
        }, 1000)
        setTictac(timer)
      }
      setMostrarReloj(true)
    }
  
    const detener = () => {
      // Detener el temporizador si está activo
      if (tictac !== null) {
        clearInterval(tictac)
        setTictac(null)
      }
      setMostrarReloj(false)
    }
  
    return (
      <div>
        <h2>Ciclo de Vida de los componentes</h2>
        { mostrarReloj && <h3>{hora}</h3> }
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={detener}>Detener</button>
      </div>
    )
  }
  
  export default CicloVida
  