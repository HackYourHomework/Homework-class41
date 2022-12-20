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
------------------------------------------------------------------------------*/

async function fetchData(url) {
  const data = await fetch(url);
  try {
    if (!data.ok) {
      throw Error(data);
    }
  } catch (error) {
    console.error(error);
  }
  return data;
}

async function fetchAndPopulatePokemons(url) {
  const pokemons = await fetchData(url);
  const pokemonsJson = await pokemons.json();
  const pokemonButton = document.createElement('button');
  pokemonButton.type = 'button';
  pokemonButton.textContent = 'Get Pokemon!';
  document.body.appendChild(pokemonButton);
  const dropDown = document.createElement('select');
  const pokeImg = document.createElement('img');
  pokeImg.src =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  pokeImg.alt = 'Pokemon';
  document.body.appendChild(dropDown);
  document.body.appendChild(pokeImg);

  pokemonButton.addEventListener('click', () =>
    dropDownFiller(pokemonsJson, dropDown, pokeImg)
  );
}
const dropDownFiller = async (pokemonsJson, dropDown, pokeImg) => {
  const pokemonsArray = await pokemonsJson.results;
  pokemonsArray.forEach((pokemon) => {
    const option = document.createElement('option');
    option.textContent = pokemon.name;
    option.value = pokemon.url;
    dropDown.appendChild(option);
  });
  dropDown.addEventListener('change', (e) => {
    fetchImage(pokeImg, e.target.value);
  });
};

async function fetchImage(img, url) {
  const src = await fetchData(url);
  const imgSrc = await src.json();
  img.src = imgSrc.sprites.front_default;
}

function main() {
  addEventListener('load', () => {
    fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
  });
}
main();
