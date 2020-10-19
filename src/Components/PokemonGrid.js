import React from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon'
import { PokemonGridItem } from './PokemonGridItem'
export const PokemonGrid = ({ pokemon }) => {

    const { data: images, loading } = useFetchPokemon(pokemon);
    return (
        <>
            {loading && <p className="animate__bounceOut animate__flash">Loading</p> }
            <div className="card-grid">
                <PokemonGridItem title={images.name} url={images.image}/>                
            </div>
        </>
    )
}
