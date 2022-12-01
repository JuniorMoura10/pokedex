const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0

function loadPokemonItems(offset, limit){
    function convertPokemonToHtml(pokemon) {
        return `
              <li class="pokemon ${pokemon.type}">
                  <span class="number">#${pokemon.number}</span>
                  <span class="name">${pokemon.name}</span>
      
                  <div class="detail">
                  <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>  
      
                  <img src="${pokemon.image}" alt="${pokemon.name}">
                  </div>          
              </li>
          `
      }


    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {   
        pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
      })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})
