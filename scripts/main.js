$(document).ready(function () {
    let swiper;
    let init = false;

    function swiperMode() {
        const mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)').matches;
        const tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches;
        const desktop = window.matchMedia('(min-width: 1025px)').matches;

        if (mobile) {
            if (!init) {
                init = true;

                swiper = new Swiper('.swiper-container', {
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

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 0,
                        slideShadows: false,
                    },
                });
            }
        } else if (tablet || desktop) {
            if (swiper && typeof swiper.destroy === "function") {
                swiper.destroy(true, true);
                init = false;
            }
        }
    }

    $(window).on('load', function () {
        swiperMode();
    });

    $(window).on('resize', function () {
        swiperMode();
    });

    var vitrine = $('#vitrine-1').html();
    $('#vitrine-2').html(vitrine);
})