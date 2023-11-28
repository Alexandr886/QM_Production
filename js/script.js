//слайдер с командой
const sliderTeam = document.querySelector('.slider-team');

let mySwiperTeam = new Swiper(sliderTeam, {
    slidesPerView: '1',
    spaceBetween: 22,
    grabCursor: true,
    // loop: true,
    simulateTouch: true,
    mousewheel: {
        sensitivity: 1,
    },
    navigation: {
        nextEl: '.swiper-button-next-team',
        prevEl: '.swiper-button-prev-team',
     },
     breakpoints: {
        768: {slidesPerView: '2',},
        1024: {slidesPerView: '3',},
        1366: {slidesPerView: '4',},
     }
})



//Слайдер с партнерами
const sliderClients = document.querySelector('.slider-clients');

let mySwiperClients = new Swiper(sliderClients, {
    slidesPerView: '1',
    spaceBetween: 22,
    grabCursor: true,
    // loop: true,
    simulateTouch: true,
    mousewheel: {
        sensitivity: 1,
    },
    navigation: {
        nextEl: '.swiper-button-next-client',
        prevEl: '.swiper-button-prev-client',
     },
     breakpoints: {
        500: {slidesPerView: '2',},
        750: {slidesPerView: '3',},
        1366: {slidesPerView: '5',},
        1900: {slidesPerView: '8',},
     }
})



//Вывод текущего года в футере
document.querySelector('.cur_year').textContent = new Date().getFullYear();



//Бургер меню
const humb = document.querySelector('#humb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#nav').cloneNode(1); //клонируем навигацию
const socials = document.querySelector('#socials').cloneNode(1); //клонируем соц сети

//Клик на бургере
humb.addEventListener('click', openPopup);

function openPopup(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
    humb.classList.toggle('active');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu); //добавляем склонированную навигацию
    popup.appendChild(socials); //добавляем склонированные соц сети
    //Убираем все классы, чтобы при клике в бургере на ссылки юзер скроллился и бургер закрывался
    let navLinks = document.querySelectorAll('.nav__link');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            popup.classList.remove('open');
            document.body.classList.remove('no-scroll');
            humb.classList.remove('active');
        });
    }
}



