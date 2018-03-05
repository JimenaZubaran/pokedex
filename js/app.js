$('.modal').modal();
let container = $("#container-pokemon");
let modal =$(".modal");



function ulrPokemons(data){
  //console.log(data);
  let modalContainer = " ";
  // data.forEach(item =>{
    let captureRate = data.capture_rate;
    let habitat = data.habitat.name;
    let color = data.color.name;
  //  console.log(captureRate);
  //   console.log(habitat);
  //  console.log(color);

   modalContainer += 
   `<div class="modal-content">
   <h4 id="capture">${captureRate}</h4>
   <p id="habitat">${habitat}</p>
   <p id="color">${color}</p>
 </div>`
  // })
  modal.append(modalContainer);
//Filtar con la data-name y hacer funcion de pintarlos zoo refactorizado
//modal.addEventListener("click", filter);
// function filter(){
//   sacar event.target.dataset.name
//   filtrar si es = 
//   Funcion pintarmodal
// }
  
  //($(this))

}


$('.modal').on(function(e){
  var filterPokemon = event.target.dataset.name;
  console.log(filterPokemon);
});



function allPokemons(pokemon){
    let resultsPokemon = pokemon.pokemon_entries;
    //console.log(resultsPokemon);
    let output = " ";

    resultsPokemon.forEach((item, index) =>{
        let pokemonSpecies = item.pokemon_species;
        let pokemonName = pokemonSpecies.name;
        let pokemonUrl =pokemonSpecies.url;
        //console.log(pokemonName);
        //console.log(pokemonUrl);
        output += 
        `<div class="col m4">
        <div class="col m12">
          <div class="card">
            <div class="card-image">
              <img src="https://vignette.wikia.nocookie.net/creepypasta/images/3/3b/Pokemon.jpg/revision/latest?cb=20170708060202&path-prefix=es">
            </div>
            <div class="card-content">
              <p>${pokemonName}</p>
            </div>
            <div class="card-action">
              <a href="${pokemonUrl}">This is a url</a>
            </div>
            <a class="waves-effect waves-light btn modal-trigger" data-name="${index}" href="#modal1">Modal</a>
          </div>
        </div>
      </div>`

      $.ajax({
        url: pokemonUrl
    }).done(ulrPokemons)

    })
    // $(".modal").html = " ";
    container.append(output);
}




$.ajax({
    url: `https://pokeapi.co/api/v2/pokedex/1`
}).done(allPokemons)