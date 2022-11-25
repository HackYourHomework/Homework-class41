'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
   const logo = document.querySelector('.lnXdpd');
   logo.src = 'https://uploads-ssl.webflow.com/62745a1007e49e2461fb7ecd/62745a1007e49e335ffb8025_hyfcartoon.svg';
   logo.srcset = 'https://uploads-ssl.webflow.com/62745a1007e49e2461fb7ecd/62745a1007e49e335ffb8025_hyfcartoon.svg';
}

hijackGoogleLogo();
