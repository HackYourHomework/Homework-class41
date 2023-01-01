'use strict';

function requestData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderImage(data) {
  const body = document.getElementsByTagName('body');
  const imgContainer = document.createElement('img');

  imgContainer.src = data.img;
  imgContainer.alt = data.alt;
  body.appendChild(imgContainer);
  console.log(data);
}

function renderError(error) {
  const body = document.getElementsByTagName('body');
  const errorElement = document.createElement('div');
  errorElement.textContent = error;
  body.appendChild(errorElement);
  console.log(error);
}

async function main() {
  try {
    requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
