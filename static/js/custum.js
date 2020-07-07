AOS.init();
$('.dropdown-menu a').click(function() {
    $('#selected').text($(this).text());
});
$("#main_veil").addClass("no_width");

var swiper1 = new Swiper('.swiper1', {
    // this shows a bit of the previous/next slides
    slidesPerView: 3,
    spaceBetween: 45,
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 4,
        },
    }
});

var swiper2 = new Swiper('.swiper2', {
    // this shows a bit of the previous/next slides
    slidesPerView: 1,
    spaceBetween: 21,
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
});


var interleaveOffset = 0.5;

var swiperOptions = {
    speed: 1000,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        progress: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },
        touchStart: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function(speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
            }
        },
        slideChangeTransitionStart: function() {
            $('.animation').hide(0);
            $('.animation').removeClass('aos-init').removeClass('aos-animate');
        },
        slideChangeTransitionEnd: function() {
            $('.animation').show(0);
            AOS.init();
        },
    }
};

var swiper = new Swiper(".slideshow", swiperOptions);