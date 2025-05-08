import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperGalleryContainer = document.querySelector('[data-gallery-swiper]');
const swiperGalleryWrapperElement = document.querySelector(
  '[data-gallery-swiper-wrapper]'
);
const slideGalleryElements = document.querySelector('[data-gallery-slide]');
const paginationGalleryElement = document.querySelector(
  '[data-gallery-pagination]'
);

document.addEventListener('DOMContentLoaded', function () {
  const gallerySwiper = new Swiper(swiperGalleryContainer, {
    slideClass: slideGalleryElements.classList[0],
    wrapperClass: swiperGalleryWrapperElement.classList[0],
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    effect: 'slide',

    pagination: {
      el: paginationGalleryElement,
      clickable: true,
      bulletClass: 'gallery-swiper-bullet',
      bulletActiveClass: 'current',
      renderBullet: function (index, className) {
        return `<div class="${className}" data-swiper-pagination-bullet data-bullet-number="${index}"></div>`;
      },
    },
    navigation: {
      nextEl: '[data-gallery-swipe-right]',
      prevEl: '[data-gallery-swipe-left]',
    },
    breakpoints: {
      320: {
        navigation: false,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 32,
        centeredSlides: true,
        grabCursor: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        },

        pagination: false,
        navigation: {
          nextEl: '[data-gallery-swipe-right]',
          prevEl: '[data-gallery-swipe-left]',
          enabled: true,
        },
      },
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
      },
    },
  });
});
