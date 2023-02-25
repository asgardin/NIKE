// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// Анимация Контента
import AOS from 'aos';
AOS.init();

let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.caption');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};



/*===================================search=============================================================== */
const icon = document.querySelector('.icon')
const search = document.querySelector('.search')
const clear = document.querySelector('.clear')

icon.onclick = function() {
    search.classList.toggle('active')
}

clear.onclick = function() {
    document.getElementById('mySearch').value = ''
}


/*===================================grid=============================================================== */

$(document).ready(function(){
  $(".row__content").slice(0, 3).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".row__content:hidden").slice(0, 3).slideDown();
    if($(".row__content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})


