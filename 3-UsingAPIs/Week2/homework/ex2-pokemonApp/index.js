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
const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchData(url) {
  try {
    const resp = await fetch(url);
    if (resp.ok) {
      return resp;
    } else {
      throw new Error(resp);
    }
  } catch (error) {
    renderError(error);
  }
}

async function fetchAndPopulatePokemons(url) {
  const body = document.querySelector('body');

  const getButton = document.createElement('button');
  getButton.textContent = 'Get Pokemon!';
  body.appendChild(getButton);

  const pokemonSelect = document.createElement('select');
  body.appendChild(pokemonSelect);

  try {
    const data = await (await fetchData(url)).json();
    data.results.forEach((element) => {
      const selectOption = document.createElement('option');
      selectOption.value = element.url;
      selectOption.textContent = element.name;
      pokemonSelect.appendChild(selectOption);
    });

    const imageContainer = document.createElement('img');

    try {
      const image = await (await fetch(data.results[0].url)).json();
      imageContainer.src = image.sprites.front_default;
      imageContainer.alt = image.forms.name;
      body.appendChild(imageContainer);
    } catch (error) {
      renderError(error);
    }
    pokemonSelect.addEventListener('change', (elem) => {
      fetchImage(imageContainer, elem.target.value);
    });
  } catch (error) {
    renderError(error);
  }
}

async function fetchImage(image, url) {
  try {
    const data = await (await fetchData(url)).json();

    image.src = data.sprites.front_default; // front view image
    image.alt = data.forms.name;
    body.appendChild(image);
  } catch (error) {
    renderError(error);
  }
}

function renderError(error) {
  console.log(error);
}

function main() {
  fetchAndPopulatePokemons(POKEMON_API);
}

window.addEventListener('load', main);
