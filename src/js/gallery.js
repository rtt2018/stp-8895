import Swiper from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';
import 'swiper/bundle';

const swiperGalleryContainer = document.querySelector('[data-gallery-swiper]');
const swiperGalleryWrapperElement = document.querySelector(
    '[data-gallery-swiper-wrapper]'
);
const slideGalleryElements = document.querySelector('[data-gallery-slide]');
const paginationGalleryElement = document.querySelector(
    '[data-gallery-pagination]'
);
let swiper;

function initSwiper() {
    if (swiper) swiper.destroy(true, true);

    swiper = new Swiper(swiperGalleryContainer, {
        slideClass: 'swiper-slide',
        wrapperClass: 'swiper-wrapper',
        centeredSlides: true,
        direction: 'horizontal',
        spaceBetween: -116,
        effect: 'coverflow',
        centeredSlidesBounds: false,
        grabCursor: true,
        loop: true,
        loopAdditionalSlides: 2,
        loopedSlides: 5,
        slidesPerView: window.innerWidth >= 1200 ? 4 : 1,

        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 130,
            modifier: 1.5,
            slideShadows: false,
        },

        navigation: {
            nextEl: '[data-gallery-swipe-right]',
            prevEl: '[data-gallery-swipe-left]',
        },

        // pagination: {
        //   el: paginationGalleryElement,
        //   clickable: true,
        //   bulletClass: 'gallery-swiper-bullet',
        //   bulletActiveClass: 'current',
        //   renderBullet: function (index, className) {
        //     return `<div class="${className}" data-swiper-pagination-bullet data-bullet-number="${index}"></div>`;
        //   },
        // },

        breakpoints: {
            320: {
                // pagination: {
                //   enabled: true,
                // },
                cardsEffect: {
                    slideShadows: false,
                },
                navigation: {
                    enabled: false,
                },
            },
            1200: {
                pagination: false,
            },
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                const activeSlideNumber = Number.parseInt(
                    activeSlide.dataset.slideNumber
                );
                const descriptionList = document.querySelector(
                    '[data-gallery-description-list]'
                );
                const currentVisible = descriptionList.querySelector(
                    '[data-is-visible="true"]'
                );
                currentVisible.dataset.isVisible = String(false);
                const nextVisibleDesc = descriptionList.querySelector(
                    `[data-description-number="${activeSlideNumber}"]`
                );
                nextVisibleDesc.dataset.isVisible = true;

                const activeBullet = document.querySelector('[data-gallery-pagination-bullet="true"]')
                activeBullet.dataset.galleryPaginationBullet = false;
                const currentBullet = document.querySelector(`[data-slider-index="${activeSlideNumber}"]`)
                currentBullet.dataset.galleryPaginationBullet = true;
            },
        },
    });
}

initSwiper();

// Reinitialize Swiper on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Resizing and re-initializing Swiper due to viewport change.');
        initSwiper();
    }, 250);
});
