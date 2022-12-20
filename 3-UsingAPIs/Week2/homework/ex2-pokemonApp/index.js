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
  try {
    const data = await fetch(url).then((response) => response.json());
    fetchAndPopulatePokemons(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function fetchAndPopulatePokemons(data) {
  const select = document.querySelector('select');
  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.url;
    option.textContent = element.name;
    select.appendChild(option);
  });
  select.addEventListener('change', (event) => {
    fetchImage(event);
  });
}

async function fetchImage(event) {
  try {
    const selectUrl = event.target.value;
    const img = document.querySelector('img');
    const imgData = await fetch(selectUrl).then((response) => response.json());
    img.alt = 'Pokemon';
    img.src =
      imgData.sprites['versions']['generation-v']['black-white']['animated'][
        'front_default'
      ];
    console.log(event.target.value);
  } catch (error) {
    console.log(error.message);
    console.log(event.target.value);
  }
}

function main() {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get Pokemon!';
  document.body.appendChild(button);
  const select = document.createElement('select');
  document.body.appendChild(select);
  const img = document.createElement('img');
  img.alt = null;
  img.src =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif';
  document.body.appendChild(img);
  button.addEventListener('click', () => {
    fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  });
}

window.addEventListener('load', main);
