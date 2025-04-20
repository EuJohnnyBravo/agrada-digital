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
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {slidesPerView: 3, spaceBetween: 20},
                1440: {slidesPerView: 4, spaceBetween: 20}
            }
        });
    }
}