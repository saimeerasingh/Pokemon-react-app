import Pokemon from "./Pokemon";

const PokemonList =({pokemons}) => {

    const pokemonComponent = pokemons.results.map((pokemonSingle, index) =>{
        return <Pokemon pokemon = {pokemonSingle} key={index}/>
    })
   return(
    <>
    {pokemonComponent}
    </>
   ) 
}

export default PokemonList;