import React from "react";
import { useState } from "react";

const Pokemon =({pokemon}) => {

    const[imageURL,setImageURL] = useState("")

    const handlePokemonClick = (e) => {
        fetchPokemonImage(pokemon.url);
    }

    const fetchPokemonImage = async(url) => {
        const pokeImageData = await fetch(url)
        const pokemonObject = await pokeImageData.json()
        setImageURL(pokemonObject.sprites.other['official-artwork'].front_default);

    }
    return(
        <>
        <div onClick={handlePokemonClick}>{pokemon.name}
        <span><img src={imageURL}/></span>
        </div>
        </>
    )
}

export default Pokemon;