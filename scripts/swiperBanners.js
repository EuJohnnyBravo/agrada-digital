var swiperBannersInstance = null;
var initBanners = false;

function initSwiperBanners() {
    var viewport = checkViewport();

    if (viewport.mobile && !initBanners) {
        initBanners = true;
        swiperBannersInstance = new Swiper('.swiper-banners', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            direction: 'horizontal',
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 0,
                slideShadows: false,
            },
        });
    } else if (!viewport.mobile && swiperBannersInstance) {
        swiperBannersInstance.destroy(true, true);
        initBanners = false;
    }
}
