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


const swiperNewsList = new Swiper('#newsListSlider', {    
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
        },
        576: {
            slidesPerView: 2,
            centeredSlides: false
        }
    },

    pagination: {
        el: "#newsListPagination",
        clickable: true,
    }


});
