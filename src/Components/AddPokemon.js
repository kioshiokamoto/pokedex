import React, { useState} from 'react';
import PropTypes from 'prop-types';

export const AddPokemon = ({setPokemon}) => {

    const [inputValue, setInputValue]= useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setPokemon(pokemon => [inputValue.toLowerCase(),...pokemon]);
            setInputValue('');
        }

    }
    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                value={inputValue}
                onChange = {handleInputChange}
            /> 
        </form>
    )

    
}
AddPokemon.propTypes = {
    setPokemon : PropTypes.func.isRequired
}
