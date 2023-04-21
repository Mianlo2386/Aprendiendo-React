/* import React, {Component, useState} from 'react'

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

const Estado = () => {
    const [contador, setContador]=useState(0)
    setInterval(()=>{
        setContador(contador + 1)
    },1000)
  return (
    <div>
      <h2>El State</h2>
      <h3>{contador}</h3>
      <EstadoAHijo contadorHijo={contador}/>
    </div>
  )
}

export default Estado */

import React, { Component, useState, useEffect } from 'react';

const Estado = () => {
  const [contador, setContador] = useState(0);

  /* useEffect(() => {
    const timer = setTimeout(() => {
      setContador(contador + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [contador]); */

  return (
    <div>
      <h2>El State</h2>
      <h3>{contador}</h3>
    </div>
  );
};

export default Estado;
