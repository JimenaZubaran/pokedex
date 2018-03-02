let container = $("#container-pokemon");

function allPokemons(pokemon){
    let resultsPokemon = pokemon.pokemon_entries;
    console.log(resultsPokemon);
    let output = " ";

    resultsPokemon.forEach(item =>{
        let pokemonSpecies = item.pokemon_species;
        let pokemonName = pokemonSpecies.name;
        let pokemonUrl =pokemonSpecies.url;
        console.log(pokemonName);
        console.log(pokemonUrl);
        output += 
        `<div class="cards row col m3">
        <div class="col s12 m3 lg5 cards">
          <div class="card">
            <div class="card-image">
              <img src="https://dummyimage.com/200x200/">
            </div>
            <div class="card-content">
              <p>${pokemonName}</p>
            </div>
            <div class="card-action">
              <a href="${pokemonUrl}">This is a url</a>
            </div>
          </div>
        </div>
      </div>`

    })
    container.append(output);
}




$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1`
}).done(allPokemons)