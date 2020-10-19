import { useEffect, useState } from 'react'
import {getPokemon} from '../helpers/getPokemon'


export const useFetchPokemon = (pokemon) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=>{
        getPokemon(pokemon)
            .then( imgs =>{
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [pokemon]);
   // console.log(state);
    return (state);
}
