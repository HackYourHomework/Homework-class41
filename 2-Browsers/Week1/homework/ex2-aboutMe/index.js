'use strict';

const nickName = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');

nickName.appendChild(document.createTextNode('Bumin'));

favFood.appendChild(document.createTextNode('Brocoli soup'));

homeTown.appendChild(document.createTextNode('Istanbul'));

const listItems = document.querySelectorAll('li');

for (let index = 0; index < listItems.length; index++) {
  listItems[index].className = 'list-item';
}
