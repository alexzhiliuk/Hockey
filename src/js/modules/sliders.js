import Swiper, {Autoplay, Navigation, Pagination, Manipulation} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Manipulation]);

const swiperLastMatches = new Swiper('#lastMatchesSlider', {    
    slidesPerView: "auto",
    spaceBetween: 12,
    loop: true,
    centeredSlides: true,
    
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    },

    navigation: {
        prevEl: "#lastMatchesSliderPrev",
        nextEl: "#lastMatchesSliderNext"
    },

});
