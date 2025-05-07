import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const gallerySwiper = new Swiper('.gallery-swiper', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    effect: 'slide',

    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        effect: 'slide',
      },
      1020: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        effect: 'cards',
        cardsEffect: {
          perSlideOffset: 10,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true,
        },
      },
    },
  });
});
