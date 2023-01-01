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
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchAndPopulatePokemons(url) {
  const pokeContainer = document.getElementById('poke-list');
  const jsonData = await fetchData(url);
  const arr = jsonData.results;
  console.log(jsonData);
  console.log(arr);
  for (let index = 0; index < arr.length; index++) {
    const element = document.createElement('option');

    element.value = arr[index].url;
    element.textContent = `${index + 1} -  ${arr[index].name}`;
    pokeContainer.appendChild(element);
  }
}

async function fetchImage() {
  const selected = document.getElementById('poke-list');
  selected.addEventListener('change', async (event) => {
    const grabApi = event.target.value;
    const pokeImg = document.getElementById('poke-img');
    const imgFetch = await (await fetch(grabApi)).json();
    console.log(imgFetch);
    pokeImg.src = imgFetch.sprites.other.home.front_default;
    pokeImg.alt = imgFetch.forms[0].name;
  });
}

async function main() {
  try {
    await fetchData(URL);
    await fetchAndPopulatePokemons(URL);
    await fetchImage();
  } catch (error) {
    console.log(error);
  }
}

//main();

window.addEventListener('load', main);
