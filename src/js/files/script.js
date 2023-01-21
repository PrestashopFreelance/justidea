// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
$(document).ready(function () {
    if($(window).width() > 768){
      turnCircles()
    } else {
      destroyCircle()
    }
    $(window).on('resize',function(){
        if($(window).width() > 768){
          turnCircles()
        } else {
          destroyCircle()
        }
    });
});

    function turnCircles() {
        const circles = document.querySelectorAll('.item');
        const count = circles.length;
        const deg = Math.floor(360 / count);
      
        let style = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(style);
        let css = '';
        circles.forEach((item, i) => {
          item.classList.add(`deg-${deg * i}`);
          css += `.deg-${deg * i} {
            transform:rotate(${deg * i + 1}deg) translate(300px) rotate(${-deg * i - 1}deg);
           
          }`;
          
          if ( (deg * i > 80) && (deg * i < 105)) {
            item.classList.add('item--bottom');
          } else if ((deg * i > 260) && (deg * i < 280)) {
            item.classList.add('item--top');
          } else if ( (deg * i > 100) && (deg * i < 270)) {
            item.classList.add('item--left');
          } else {
            item.classList.add('item--right');
          }
          setTimeout(function() {item.classList.add(`fade-in`)}, deg * (i + 1) * 20);
        });
      
        style.innerHTML = css;
     
      }

      function destroyCircle() {
        $('.item').each(function(){
          $(this).removeClass();
          $(this).addClass('item');
        });
      }
      
