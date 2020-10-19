import React from 'react'

export const PokemonGridItem = ({ title, url }) => {
    
    
    return (

        <div className='card animate__bounceOut animate__fadeIn'>

            <img src={url} alt={title} />

            <h4 className="animate__bounceOut animate__fadeIn">{title}</h4>
        </div>


    )
}
