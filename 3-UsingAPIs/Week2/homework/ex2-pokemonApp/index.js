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
  // TODO complete this function
  try {
    const resp = await fetch(url);
    if (resp.ok) {
      return resp;
    } else {
      throw new Error(resp);
    }
  } catch (error) {
    console.log(error);
  }
}


async function fetchAndPopulatePokemons(url) {
  // TODO complete this function
  const butt = document.createElement('button');
  butt.textContent = 'Get Pokemon!'
  butt.type = 'button';
  document.querySelector('body').appendChild(butt);
  
  const pokemonSelect = document.createElement('select');
  document.querySelector('body').appendChild(pokemonSelect);

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
      document.querySelector('body').appendChild(imageContainer);
    } catch (error) {
      console.log(error);
    }
    pokemonSelect.addEventListener('change', (elem) => {
      fetchImage(imageContainer, elem.target.value);
    });
  } catch (error) {
    console.log(error);
  }
}

async function fetchImage(image,url) {
  // TODO complete this function
  try {
    const data = await(await fetchData(url)).json();
    image.src = data.sprites.front_default;
    image.alt = data.forms.name;
  } catch (error) {
    console.log(error);
  }
}

function main() {
  // TODO complete this function

  fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
}

window.addEventListener('load', main);
 