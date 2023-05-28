const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const returnMain = document.getElementById('detail-return');
const bookmark = document.getElementById('bookmark');

const maxRecords = 151
const limit = 10
let offset = 0;
let indexDetail = -1;

function convertPokemonToLi(pokemon) {    
    pokemonArr.push(pokemon);    
    return `
        <li class="pokemon ${pokemon.type}") onclick=pokeApi.showDetails(${pokemonArr.length - 1})>
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

returnMain.addEventListener('click', () => {
    document.getElementsByClassName('container-details')[0].
             style.
             display = 'none';
             
    indexDetail = -1;
} ); 

bookmark.addEventListener('click', changeBookmark);                                         