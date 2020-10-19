export const getPokemon = async(pokemon) => {


    const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(pokemon)}`;
    
    const resp = await fetch(url);
    const {name,sprites:image} = await resp.json();
   

    const poke = {
            name: name,
            image: image?.front_default
    }
    //console.log(poke);
    return poke;
}
