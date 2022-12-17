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
const imgDiv = document.createElement('div');

async function fetchData(url) {
  const fetchedData = await fetch(url);
  if (fetchedData.ok) {
    const data = await fetchedData.json();
    return data;
  }
  throw new Error('HTTP error');
}

function fetchAndPopulatePokemons(data) {
  const selectPokemon = document.createElement('select');
  selectPokemon.style.width = '20%';
  document.body.appendChild(selectPokemon);
  const arrayPokemons = data.results;
  arrayPokemons.unshift({
    name: 'Choose Pokemon name',
    value: '',
  });

  for (let i = 0; i < arrayPokemons.length; i++) {
    const namePokemon = arrayPokemons[i].name;
    const option = document.createElement('option');
    option.textContent = namePokemon;
    option.value = arrayPokemons[i].url;
    selectPokemon.appendChild(option);
  }
  return selectPokemon;
}

async function fetchImage(pokemonUrl) {
  try {
    const imgUrl = await fetch(pokemonUrl);
    const imgPokemon = document.createElement('img');
    document.body.appendChild(imgDiv);

    if (imgDiv.contains(document.querySelector('img'))) {
      imgDiv.replaceChild(imgPokemon, document.querySelector('img'));
    }
    imgDiv.appendChild(imgPokemon);
    imgPokemon.alt = 'Pokemon picture';
    const imageUrl = await imgUrl.json();
    imgPokemon.src = imageUrl.sprites.other.dream_world.front_default;
  } catch (error) {
    throw new Error('Fetch IMAGE Error');
  }
}

function main() {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get Pokemon';
  button.style.width = '20%';
  document.body.appendChild(button);
  button.addEventListener('click', () => {
    if (!document.body.contains(document.querySelector('select'))) {
      fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((data) => fetchAndPopulatePokemons(data))
        .then((selectPokemon) => {
          selectPokemon.addEventListener('change', (option) => {
            const pokemonUrl = option.target.value;
            fetchImage(pokemonUrl);
          });
        });
    }
  });
}

window.addEventListener('load', main);
