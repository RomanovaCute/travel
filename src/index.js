import Swiper, { Navigation, Pagination } from 'swiper';


var menu = ['', '', '']
const swiper = new Swiper(".swiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      width: 1440,
      clickable:true,
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class=" ' + className + ' ">' + (menu[index])  + '</span>';}
    },
    mousewheel: true,
    keyboard: true,
    spaceBetween: 60,
    width: 1440,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    loopedSlides: 5,
    slidesPerView: 1.5,

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 1,
        width: 360,
        spaceBetween: 20
      },
      393: {
        slidesPerView: 1.5,
        initialSlide: 1,
      }
    }
  });



document.querySelector('.swiper-button-next').addEventListener('click', clickNext)
function clickNext(){
    const swiperNext = document.querySelector('.swiper').swiper;
   swiperNext.slideNext();
}

document.querySelector('.swiper-button-prev').addEventListener('click', clickPrev)
function clickPrev(){
    const swiperNext = document.querySelector('.swiper').swiper;
   swiperNext.slidePrev();
}

// функционал pop-up
const loginBtn = document.querySelector('.popup-link')           //кнопка на главном экране
const popup = document.querySelector('.popup-body')              //весь попап-контейнер
const registerPopUp = document.querySelector('.popup')           //log-in попап
const createAccPopUp = document.querySelector('.create-popup');  //create account попап
const registerBtn = document.querySelector('.register-link');    //кнопка Register
const loginToggle = document.querySelector('.login-link');       //кнопка login в попапе create account

const email = document.querySelector('#email'),
    pass = document.querySelector('#password');

const mobPopUp = document.querySelector('.mobile-container');

// открытие попап + отключение скролла
loginBtn.addEventListener('click', () => {
  popup.classList.toggle('hidden')
  document.body.style.overflow = "hidden"
  myFunction();
  
  registerPopUp.addEventListener('animationend', () => {
    registerPopUp.style.top = '50%'
  })
})

// закрытие попап + включение скролла !!!!!!!!!!!
popup.addEventListener('click', (event) => {
  if(event.target.classList.contains('popup-body')){
    popup.classList.toggle('hidden')
    createAccPopUp.classList.toggle('hidden')
    registerPopUp.classList.toggle('hidden')

    document.body.style.overflow = ""; 
  }
})

// переключение на форму 'create account'
registerBtn.addEventListener('click', () => {
  registerPopUp.classList.toggle('hidden')
  createAccPopUp.classList.toggle('hidden')
  document.body.style.overflow = "hidden"
})

// переключение с формы 'create account' на 'log in'
loginToggle.addEventListener('click', () => {
  registerPopUp.classList.toggle('hidden')
  createAccPopUp.classList.toggle('hidden')
})

function myFunction() {
  registerPopUp.style.animation = "mymove 4s";
}

// вывод alert с данными
function data(){
  alert (`Ваш логин: ${email.value}
          Ваш пароль: ${pass.value}`);
}

document.querySelector('.submit-btn').addEventListener('click', data);

// функционал меню в мобильной версии
document.querySelector('.header__burger-menu').addEventListener('click', () => {
  mobPopUp.classList.toggle('hidden');
})

document.querySelector('.close-pic').addEventListener('click', () => {
    mobPopUp.classList.toggle('hidden')
    document.body.style.overflow = ""; 
})

document.querySelector('.popup-tap').addEventListener('click', () => {
  popup.classList.toggle('hidden')
  document.body.style.overflow = "hidden"; 
  myFunction();
  
  registerPopUp.addEventListener('animationend', () => {
    registerPopUp.style.top = '35%'
  })
})