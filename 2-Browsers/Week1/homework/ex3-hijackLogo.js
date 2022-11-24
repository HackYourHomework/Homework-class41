'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const elLogos = document.getElementsByTagName('img');
  if (elLogos !== null) {
    for (let i = 0; i < elLogos.length; i++) {
      if (elLogos[i].alt === 'Google') {
        elLogos[i].src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
        elLogos[i].srcset =
          'https://www.hackyourfuture.dk/static/logo-dark.svg';
      }
    }
  }
}

hijackGoogleLogo();
