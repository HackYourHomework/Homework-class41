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

async function fetchAndPopulatePokemons() {
  const pokemons = await fetchData(
    'https://pokeapi.co/api/v2/pokemon?limit=151)'
  );
  const pokemonsJson = await pokemons.json();
  const pokemonsArray = await pokemonsJson.results;
  const dropDown = document.createElement('select');
  const pokeImg = document.createElement('img');
  document.body.appendChild(pokeImg);
  console.log(pokemonsJson);

  pokemonsArray.forEach((pokemon) => {
    const option = document.createElement('option');
    option.textContent = pokemon.name;
    dropDown.appendChild(option);

    pokeImg.src = pokemon.url;
  });

  document.body.append(dropDown);
}
fetchAndPopulatePokemons();

async function fetchImage() {
  // TODO complete this function
}

function main() {
  // TODO complete this function
}
