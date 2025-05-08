import Swiper from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';
import 'swiper/bundle';

const swiperGalleryContainer = document.querySelector('[data-gallery-swiper]');
const swiperGalleryWrapperElement = document.querySelector('[data-gallery-swiper-wrapper]');
const slideGalleryElements = document.querySelector('[data-gallery-slide]');
const paginationGalleryElement = document.querySelector('[data-gallery-pagination]');
let swiper;

function initSwiper() {

    if (swiper) swiper.destroy(true, true);

    swiper = new Swiper(swiperGalleryContainer, {
        slideClass: slideGalleryElements.classList[0],
        wrapperClass: swiperGalleryWrapperElement.classList[0],
        centeredSlides: window.innerWidth >= 1200 ? true : false,
        spaceBetween: window.innerWidth >= 1200 ? -116 : 16,
        effect: window.innerWidth >= 1200 ? 'coverflow' : 'slides',
        centeredSlidesBounds: false,
        loop: true,
        grabCursor: false,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 130,
            modifier: 1.5,
            slideShadows: false,
        },
        cardsEffect: {
            slideShadows: false,
            rotate: 0,
            perSlideOffset: 10,
            perSlideScale: 1,
        },
        breakpoints: {
            320: {
                navigation: {
                    enabled: false,
                },
                centeredSlidesBounds: true,

                // spaceBetween: -250,
            },
            1200: {
                grabCursor: true,
                pagination: false,
                spaceBetween: -116,
            },
        },
        navigation: {
            nextEl: '[data-gallery-swipe-right]',
            prevEl: '[data-gallery-swipe-left]',
        },
        pagination: {
            el: paginationGalleryElement,
            clickable: true,
            bulletClass: 'gallery-swiper-bullet',
            bulletActiveClass: 'current',
            renderBullet: function (index, className) {
                return `<div class="${className}" data-swiper-pagination-bullet data-bullet-number="${index}"></div>`;
            },
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                const activeSlideNumber = Number.parseInt(activeSlide.dataset.slideNumber)
                const descriptionList = document.querySelector('[data-gallery-description-list]');
                const currentVisible = descriptionList.querySelector('[data-is-visible="true"]')
                currentVisible.dataset.isVisible = String(false);
                const nextVisibleDesc = descriptionList.querySelector(`[data-description-number="${activeSlideNumber}"]`)
                nextVisibleDesc.dataset.isVisible = true;
            },

        }
    });

}

initSwiper();

window.addEventListener('resize', () => {
    initSwiper();
});
