function getPokemonTableDetails(pokemon) {
    return ` <table class="table_subdetails">
               <tr>
                    <td width="100px"class="subdetails-font">Species</td>
                    <td>${pokemon.species}</td>                        
               </tr>
               <tr>
                    <td class="subdetails-font">Heigth</td>
                    <td>${pokemon.height}</td>
               </tr>
               <tr>
                    <td class="subdetails-font">Weigth</td>
                    <td>${pokemon.weight}</td>
                </tr>
                <tr>
                    <td class="subdetails-font">Abilities</td>
                    <td>${pokemon.abilities.join(', ')}</td>
                </tr>
              </table> `;

}

function convertTypesToLi(pokemon) {
    return pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')
}


pokeApi.showDetails = (index) => {
  const poke = pokemonArr[index];
  indexDetail = index;

  document.getElementById('details-title').innerHTML = poke.name;
  document.getElementById('details-number').innerHTML = `#${poke.number}`;
  document.getElementById('detail-img').src = poke.photo;  

  /*Adicionando estilo da cor de fundo*/
  details = document.getElementsByClassName('container-details')[0];
  details.classList.remove(...details.classList);
  details.classList.add('container-details');
  details.classList.add(poke.type); 

  document.getElementById('subdetails').innerHTML = getPokemonTableDetails(poke);
  document.getElementById('details-types').innerHTML =  convertTypesToLi(poke);

  changeBookmarkColor(poke.bookmarked);  

  document.getElementsByClassName('container-details')[0].style.display = 'block';

}

//TODO: Use Bookmark to filter ans show only bookmarked cards
function changeBookmark() {
  pokemonArr[indexDetail].bookmarked = !pokemonArr[indexDetail].bookmarked;
  changeBookmarkColor(pokemonArr[indexDetail].bookmarked);  
}

function changeBookmarkColor(active) {
  document.getElementById('bookmark').style.color = active ? '#FFFF00' : '#FFF';
}