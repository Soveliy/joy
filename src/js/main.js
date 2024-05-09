import './_components.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { burger } from './functions/burger.js';

Swiper.use([Navigation, Pagination]);

window.addEventListener('load', () => {

  const swiperBanner = new Swiper(".banner__swiper--js", {
    pagination: {
      el: ".banner__swiper--js .swiper-pagination",
      clickable: true,
    },
  });
  const swiperContacts = document.querySelector('.where__swiper--js')
  if (swiperContacts){

  }
  const reviewsSlider = document.querySelector('.reviews__slider--js')
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

if (reviewsSlider) {
  resizableSwiper(
    '(min-width: 1024px)',
    '.reviews__slider--js',
    {
      slidesPerView: '3',
      spaceBetween: 25,

      pagination: {
        el: ".reviews__slider--js .swiper-pagination",
        clickable: true,
      },
    }
  );

}






// Получаем все элементы аккордеона
const faqItems = document.querySelectorAll('.faq-item');

// Добавляем обработчик события клика на каждый заголовок
if (faqItems.length > 0){
  faqItems.forEach(item => {
    const head = item.querySelector('.faq-item__head');
    const body = item.querySelector('.faq-item__body');

    head.addEventListener('click', () => {
      // Проверяем, открыт ли текущий элемент
      const isOpen = item.classList.contains('js-active');

      // Закрываем все элементы аккордеона
      faqItems.forEach(item => item.classList.remove('js-active'));

      // Если текущий элемент не открыт, открываем его
      if (!isOpen) {
        item.classList.add('js-active');
      }
    });
  });

}

})
