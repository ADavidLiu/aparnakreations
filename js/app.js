$(document).ready(function () {
    
    var $headerBtn = $(".header__btn");
    var $headerNav = $(".header__nav");

    $headerBtn.click(function () {
        $headerNav.slideToggle("fast");
    });

    if ($(".section-testimonial").length > 0) {
        $(".section-testimonial__slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: "<img src='images/slider-arrow.png' class='section-testimonial__arrow section-testimonial__arrow--prev' />",
            nextArrow: "<img src='images/slider-arrow.png' class='section-testimonial__arrow section-testimonial__arrow--next' />"
        });
    }

    if ($(".feature__img-slider").length > 0) {
        $(".feature__img-slider").slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true,
            arrows: false,
            customPaging: function() {
                return "";
            },
            centerMode: true,
            centerPadding: "-100px"
        });
    }
    
});