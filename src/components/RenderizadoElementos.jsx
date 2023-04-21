import React, {useState} from 'react';
import data from '../helpers/data.json';

function ElementoLista(props){
    return(
        <li>
            <a href={props.web} target="blank">{props.name}</a>
        </li>
    )
}

const RenderizadoElementos = () => {

    const [seasons, setSeasons]=useState(['Primavera','Verano','Otoño','Invierno'])
    console.log(data)

  return (
    <div>
      <h2>Renderizado de elementos</h2>
      <h3>Estaciones del año</h3>
      <ol>
        {
            seasons.map((el,index)=><li key={index}>{el}</li>)
        }
      </ol>
      <hr />
      <h3>Frameworks Frontend JavaScript</h3>
      <ul>
        {
            data.frameworks.map((el)=> 
                <ElementoLista 
                key={el.id}
                name={el.name}
                web={el.web}

                 />
                )
        }
        
      </ul>
    </div>
  )
}

export default RenderizadoElementos
