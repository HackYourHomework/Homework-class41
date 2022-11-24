'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const catImg = document.getElementsByTagName('img')[0];
catImg.style.left = '0px';
let leftCount = 0; // To count how far cat gone from left
const interval = setInterval(catWalk, 50); // play catWalk() in every 50ms
let isCatWalking = true; // To control cat status
let isDanced = false;

async function catWalk() {
  const screenWidth = screen.width; // To calculate screen width. Unfortunately not active window size :(
  isCatWalking ? (leftCount += 10) : leftCount;
  catImg.style.left = `${leftCount}px`;

  // When cat reach to the end of the screen
  if (leftCount + catImg.width > screenWidth) {
    leftCount = 0; // to star from left again
    isDanced = false; // for cat can be able to dance again
  }

  // If i make it with '===' and not with '>' if numbers didn't catch each other: cat may never dance
  // Is dance created for this 'if' to work just for once
  if (catImg.width / 2 + leftCount > screenWidth / 2 && !isDanced) {
    isDanced = true;
    isCatWalking = false; // For cat to stop moving
    catImg.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    await new Promise((r) => setTimeout(r, 5000));
    catImg.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    isCatWalking = true;
  }
}
window.onload = interval;
