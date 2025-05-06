import Swiper from "swiper"

const swiperReviews = new Swiper('[data-swiper-container]', {
    slideClass: 'reviews-slide-item',
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // дозволяє кліком переходити по крапках
    },
});