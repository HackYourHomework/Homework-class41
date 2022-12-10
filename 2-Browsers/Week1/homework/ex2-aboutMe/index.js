'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');
nickname.textContent = '@sergeyzoloto';
favFood.textContent = 'herring';
hometown.textContent = 'Kharkiv';

const liNodeList = document.querySelectorAll('li');
liNodeList.forEach((li) => {
  li.className = 'list-item';
});

const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';
