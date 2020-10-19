import React, { useState } from 'react';
import { AddPokemon } from './AddPokemon';
import { PokemonGrid} from './PokemonGrid'
function Form() {
    
    const [pokemon, setPokemon]=useState(['pikachu']); 

    return (
        <>
            <div className="container">POKEDEX</div>
            <AddPokemon setPokemon={setPokemon}/>
            <hr/>
            <ol>
                {
                    pokemon.map((pokemon)=>( 
                        <PokemonGrid 
                            key = {pokemon} 
                            pokemon = {pokemon}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default Form;