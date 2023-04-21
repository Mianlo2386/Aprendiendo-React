import './App.css'
import Propiedades from './components/Propiedades'
import Componente from './components/Componente'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import Eventos  from './components/Eventos'
import MasSobreEventos from './components/MasSobreEventos'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'

function App() {
  

  return (
    <div className="App">
      <hr />
      <Componente msg="Hola soy un componente funcional expresado desde una prop"/>
      <hr />
      <Propiedades
      cadena='Esto es una cadena'
      numero={19} 
      booleano={true}
      arreglo={[1,2,3]}
      objeto={{nombre:'Miguel',correo:'miguelLopez@gmail.com'}}
      funcion={(num)=>num*num}
      elementoReact={<i>Esto es un elemento React</i>}
      componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
      />
      <hr />
      <Estado/>
      <hr />
      <RenderizadoCondicional />
      <hr />
      <RenderizadoElementos/>
      <hr />
      <Eventos />
      <hr />
      <MasSobreEventos />
      <hr />
      <ComunicacionComponentes/>
      <hr />
      <CicloVida/>
      <hr />
      <ContadorHooks titulo='Seguidores' />{/* Esto se superpone al prop del componente por default */}
      <hr />
      <ScrollHooks />
    </div>

  )
}

export default App
