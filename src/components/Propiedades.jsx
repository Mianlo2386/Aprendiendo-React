import React from 'react'
import PropTypes from 'prop-types'

const Propiedades = (props) => {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + '-'+props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>Este es el resultado de elevar los numeros del arreglo: {props.arreglo.map(props.funcion).join(', ')}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
    
  )
}

export default Propiedades

Propiedades.defaultProps = {
    porDefecto: "Las Props",
  }
  Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
  }
