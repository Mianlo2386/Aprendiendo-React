import React, {useState, useEffect} from 'react'

function Pokemon ({avatar, name}) {
    return (
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    )

}


const AjaxHooks = () => {
    /* useEffect(()=> {
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            json.results.forEach((el) => {
                fetch(el.url)
                .then((res) => res.json())
                .then((json)=> {
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default,
                    };
                    setPokemons((pokemons)=>[...pokemons, pokemon]);
                })
            })
        })
    
    },[]) */
    useEffect(()=> {
        const getPokemons = async (url) => {
            let res = await fetch(url)
            const json = await res.json()

            

            if (json && json.results) {
                json.results.forEach((el) => {
                  fetch(el.url)
                    .then((res) => res.json())
                    .then((json)=> {
                      let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default,
                      };
                      setPokemons((pokemons)=>[...pokemons, pokemon]);
                    })
                })
              }
              
            
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon")
    
    },[])
    
    const [pokemons, setPokemons] = useState([]);
  return (
    <div>
      <h2>Peticiones asíncronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ):(
        pokemons.map((el) =>(
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}

     
    </div>
  )
}

export default AjaxHooks
