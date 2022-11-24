'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
document.body.style.fontFamily = 'Arial, Helvetica, sans-serif'; // Test want it?? Cheat control if somebody didn't fail on this one with first try??

const ul = document.querySelectorAll('ul li'); // All 'li' that is a child of 'ul' are: selected
ul.forEach((element) => {
  element.className = 'list-item';
  switch (
    element.firstElementChild.id // First element is 'span' in the HTML. We need that because 'li' items are similar. Span has the characteristic difference
  ) {
    case 'nickname':
      element.textContent = 'Nickname: Huz'; // but we change 'li' element refers to: li
      break;
    case 'fav-food':
      element.textContent = 'Favorite food: Water';
      break;
    case 'hometown':
      element.textContent = 'Hometown: Troy';
      break;

    default:
      break;
  }
});
