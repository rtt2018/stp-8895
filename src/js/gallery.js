import Swiper from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';
import 'swiper/bundle';

const swiperGalleryContainer = document.querySelector('[data-gallery-swiper]');
let swiperGallery;

function initSwiper() {
  if (swiperGallery) swiperGallery.destroy(true, true);

  swiperGallery = new Swiper(swiperGalleryContainer, {
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

    breakpoints: {
      320: {
        navigation: {
          enabled: false,
        },
      },
      1200: {
        navigation: {
          enabled: true,
        },
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
        if (descriptionList) {
          const currentVisible = descriptionList.querySelector(
            '[data-is-visible="true"]'
          );
          if (currentVisible) {
            currentVisible.dataset.isVisible = String(false);
          }
          const nextVisibleDesc = descriptionList.querySelector(
            `[data-description-number="${activeSlideNumber}"]`
          );
          if (nextVisibleDesc) {
            nextVisibleDesc.dataset.isVisible = true;
          }
        }

        const activeBullet = document.querySelector(
          '[data-gallery-pagination-bullet="true"]'
        );
        if (activeBullet) {
          activeBullet.dataset.galleryPaginationBullet = false;
        }
        const currentBullet = document.querySelector(
          `[data-slider-index="${activeSlideNumber}"]`
        );
        if (currentBullet) {
          currentBullet.dataset.galleryPaginationBullet = true;
        }
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
    initSwiper();
  }, 250);
});
