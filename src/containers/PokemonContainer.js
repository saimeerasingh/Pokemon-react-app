import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
const PokemonContainer =() =>{
    const[pokemonsState, setPokemonsState] = useState(null);
    const URL = "https://pokeapi.co/api/v2/pokemon"

    useEffect(()=>{
        fetchPokemon()
    },[])

    // using asyncronous function - so you can use key word await
    const fetchPokemon = async() =>{
        const pokeData = await fetch(URL)
        const allPokemons = await pokeData.json()
        setPokemonsState(allPokemons)

    }



return(
<>
{pokemonsState ? <PokemonList pokemons={pokemonsState}/> : null}
</>
)

}

export default PokemonContainer;