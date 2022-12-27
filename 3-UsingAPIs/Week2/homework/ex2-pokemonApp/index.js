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
    const response = await fetch(url);
    if (!response.ok) {
      throw response.status;
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndPopulatePokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const select = document.createElement('select');
  select.style.width = '100%';
  document.body.appendChild(select);
  try {
    const data = await fetchData(url);
    data.results.forEach((element) => {
      const opt = document.createElement('option');
      opt.value = element.url;
      opt.textContent = element.name;
      select.append(opt);
    });
  } catch (error) {
    console.log(error);
  }
  select.addEventListener('change', () => {
    fetchImage();
  });
}

async function fetchImage() {
  const select = document.getElementsByTagName('select')[0];
  const prevImage = document.getElementsByTagName('img')[0];
  prevImage?.remove();
  const img = document.createElement('img');
  document.body.appendChild(img);
  const selected = select.selectedIndex;
  const url = select.options[selected].value;
  try {
    const data = await fetchData(url);
    img.src = data.sprites.front_default;
    img.alt = data.species.name;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  try {
    await fetchAndPopulatePokemons();
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', main);
