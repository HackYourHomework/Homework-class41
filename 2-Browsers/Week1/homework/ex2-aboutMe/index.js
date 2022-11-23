'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

document.body.className = 'font';
const nickname = document.getElementById('nickname');
const favoriteFood = document.getElementById('fav-food');
// eslint-disable-next-line hyf/camelcase
const hometown = document.getElementById('hometown');

nickname.textContent = 'shortlivedfault';
favoriteFood.textContent = 'Pasta';
hometown.textContent = 'Groningen';

const list = document.getElementsByTagName('li');
// eslint-disable-next-line no-autofix/prefer-const
for (let listItem of list) {
  listItem.className = 'list-item';
}
