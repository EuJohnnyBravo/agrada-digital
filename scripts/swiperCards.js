var swiperCardsInstance = null;

function initSwiperCards() {
    if (!swiperCardsInstance) {
        swiperCardsInstance = new Swiper('.swiper-produtos', {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {slidesPerView: 3, spaceBetween: 10},
                1440: {slidesPerView: 5, spaceBetween: 10}
            }
        });
    }
}