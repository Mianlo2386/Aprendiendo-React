import React, {useState} from 'react'

function LogIn() {
    return(
        <div>
            <h3>LogIn</h3>
        </div>
    )
}
function LogOut() {
    return(
        <div>
            <h3>LogOut</h3>
        </div>
    )
}

const RenderizadoCondicional = () => {
    const [session, setSession]=useState(true)
  return (
    <div>
      <h2>Renderizado Condicional</h2>
      {session ? <LogIn/> : <LogOut/> }      
    </div>
  )
}

export default RenderizadoCondicional
