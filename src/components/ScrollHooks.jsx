import React, {useEffect, useState} from 'react'

const ScrollHooks = () => {
    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState('Miguel');

    useEffect(() => {
        console.log('Moviendo el scroll')
        const detectarScroll = () => {
            setScrollY(window.pageYOffset)
            
        }
        window.addEventListener("scroll", detectarScroll)
    },[scrollY])
    useEffect(() => {
        console.log('Fase de montaje')
    },[])
    useEffect(() => {
        console.log('Fase de actualizacion')
    })

  return (
    <div>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del Navegador {scrollY} px</p>
    </div>
  )
}

export default ScrollHooks
