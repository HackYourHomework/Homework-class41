'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.

https://pokeapi.co/api/v2/pokemon/?limit=10
------------------------------------------------------------------------------*/

async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response;
  }
  throw new Error(`Error:${response.status}`);
}
async function fetchAndPopulatePokemons() {
  try {
    const pokemonData = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const pokemons = await pokemonData.json();

    const selectElement = document.createElement('select');
    const imageElement = document.createElement('img');
    imageElement.alt = 'pokemon';
    imageElement.id = 'imgPokemon';
    imageElement.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png';
    const myDiv = document.createElement('div');
    myDiv.appendChild(selectElement);
    myDiv.appendChild(imageElement);
    document.body.appendChild(myDiv);

    selectElement.addEventListener('change', fetchImage);
    pokemons.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = pokemon.url;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchImage(event) {
  try {
    const pokemonUrl = event.target.value;
    const pokemonData = await fetchData(pokemonUrl);
    const pokemons = await pokemonData.json();
    const imageElement = document.getElementById('imgPokemon');
    imageElement.src = pokemons.sprites['front_default'];
  } catch (error) {
    console.log(error.message);
  }
}

function main() {
  fetchAndPopulatePokemons();
}

window.addEventListener('load', main);
