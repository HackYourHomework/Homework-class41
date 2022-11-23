'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.getElementById('nickname').textContent = 'osamah';
document.getElementById('fav-food').textContent = 'kabsah';
document.getElementById('hometown').textContent = 'Deventer';

// document.querySelector('li').classList.add('ffffff');

// let addClassesToLi = document.querySelector('li');

const addClassesToLiElements = document.querySelectorAll('li');

addClassesToLiElements.forEach((liElement)=>{
   liElement.classList.add('list-item')
});












