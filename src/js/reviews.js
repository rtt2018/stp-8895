import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiperContainer = document.querySelector('[data-swiper]');

const swiperWrapperElement = document.querySelector('[data-swiper-wrapper]');

const slideElements = document.querySelector('[data-swiper-slide]');

const paginationElement = document.querySelector('[data-swiper-pagination]');

const swiperReviews = new Swiper(swiperContainer, {
    slideClass: slideElements.classList[0],
    wrapperClass: swiperWrapperElement.classList[0],
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
        el: paginationElement,
        clickable: true,
        bulletClass: 'reviews-swiper-bullet',
        bulletActiveClass: 'current',
        renderBullet: function (index, className) {
            return `<div class="${className}" data-swiper-pagination-bullet data-bullet-number="${index}"></div>`;
        },
    },
    navigation: {
        nextEl: '[data-swipe-right]',
        prevEl: '[data-swipe-left]',
    },
    breakpoints: {
        320: {
            navigation: {
                enabled: false,
            },
        },
        1200: {
            pagination: false,
        },
    }
});
