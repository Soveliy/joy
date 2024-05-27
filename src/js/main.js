import './_components.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { burger } from './functions/burger.js';
import NiceSelect from "nice-select2";
import MicroModal from 'micromodal';
import fslightbox from 'fslightbox';


Swiper.use([Navigation, Pagination]);
MicroModal.init({disableScroll:true});
window.addEventListener('load', () => {
  const priceFilter = document.querySelector('.price-filter__title')
  if (priceFilter){
    priceFilter.addEventListener('click', () => {
      const filterBody = priceFilter.closest('.price-filter')
      filterBody.classList.toggle('js-active')
    })
  }
  const cardUrpade = () => {
    const cards = document.querySelectorAll('.catalog-item')
    if (cards.length > 0) {
      cards.forEach(card => {
        const btn = card.querySelector('.catalog-item__button')
        btn.addEventListener('click', () => {
          btn.closest('.catalog-item').classList.toggle('in-cart')
        })
      })
    }

  }
  const modalCloses = document.querySelectorAll('.modal__close')
  if (modalCloses.length > 0){
    modalCloses.forEach(modalClose => {
      modalClose.addEventListener('click', () => {
        MicroModal.close(`${modalClose.dataset.micromodalClose}`);
      })
    })
  }
  cardUrpade();

    const formPages = document.querySelectorAll('[data-page]')
    console.log(formPages)
    const stepButton = document.querySelector("[data-step-to-button='2']");
    const page1Fields = document.querySelectorAll("[data-page='1'] .application-input__elem--req");
    const page1 = document.querySelector("[data-page='1']");
    const page2 = document.querySelector("[data-page='2']");
    console.log(page1Fields)
    stepButton.addEventListener("click", function() {
        let allFieldsFilled = true;
        // Проверяем, все ли обязательные поля на странице 1 заполнены
        page1Fields.forEach(function(field) {
            if (field.value.trim() === '') {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            page1.classList.remove("js-active");
            page2.classList.add("js-active");
        }
    });
  const nameSelect = document.getElementById('name')
  const nameGender = document.getElementById('gender')
  new NiceSelect(document.getElementById("name"), {placeholder: 'Select title'});
  new NiceSelect(document.getElementById("genger"), {placeholder: 'Select gender'});

  const tag = document.getElementById('tag')
  const category = document.getElementById('category')
  new NiceSelect(document.getElementById("tag"), {placeholder: 'tag'});
  new NiceSelect(document.getElementById("category"), {placeholder: 'category'});

  const formFunc = () => {
    const loginBtns = document.querySelectorAll('.form__side,.form__switch')
    if (loginBtns.length > 0){
      loginBtns.forEach(loginBtn =>{
        loginBtn.addEventListener('click', () => {
          loginBtn.closest('.forms').classList.toggle('js-active')
        })
      })
    }
  }
  formFunc();
  const swiperBanner = new Swiper(".banner__swiper--js", {
    pagination: {
      el: ".banner__swiper--js .swiper-pagination",
      clickable: true,
    },
  });
  const swiperContacts = document.querySelector('.where__swiper--js')
  if (swiperContacts){

    const swiperContactsSlider = new Swiper(swiperContacts, {
      spaceBetween: 25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".where__swiper--js .swiper-pagination",
      },
    });
  }


  const swiperCatalog = document.querySelector('.catalog__swiper')
  if (swiperCatalog){

    const swiperContactsSlider = new Swiper(swiperCatalog, {
      spaceBetween: 25,
      navigation: {
        nextEl: ".catalog__swiper .swiper-button-next",
        prevEl: ".catalog__swiper .swiper-button-prev",
      },
      pagination: {
        el: ".catalog__swiper .swiper-pagination",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },

        // when window width is >= 640px
        1024: {
          slidesPerView: 3,
          spaceBetween: 25
        }
      }
    });
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


// clear catalog
// const clearCatalogBtn = document.querySelector('[data-clear]')
// if (clearCatalogBtn){
//     const btnsContainer = document.querySelector('.basket-clear__row')
//     clearCatalogBtn.addEventListener('click', () => {
//       btnsContainer.classList.toggle('js-active')
//     })
// }
})
