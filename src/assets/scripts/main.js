
$('.dropdown').click(function (e) {

    $('.dropdown').toggleClass('dropdown--shown');
});
$(document).on('click', function (e) {
    if ($(e.target).is('.dropdown, .dropdown > a') == false) {
        $('.dropdown').removeClass('dropdown--shown')
    }
});

$(document).ready(function () {
    $(".owl-carousel-splash").owlCarousel({
        autoplay: true,
        autoplaySpeed: 350,
        autoplayTimeout: 3500,
        lazyLoadEager: 5,
        items: 1,
        loop: true,
        navSpeed: 500,
        pagination: true,
        nav: true
    });
});

$(document).ready(function () {
    $(".owl-carousel-logos").owlCarousel({
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2
            },
            // breakpoint from 480 up
            600 : {
                items: 3
            },
            // breakpoint from 768 up
            900 : {
                items: 5
            },
    
        },
        margin: 40,
        autoplay: true,
        autoplaySpeed: 750,
        autoplayTimeout: 2500,
        loop: true,
        dots: false,
        nav: true,
        autoplayHoverPause:true

    });
});

let containerEl = document.querySelector('.mixitup')

let mixer = mixitup(containerEl,{
    animation: {
        animateResizeContainer: false // required to prevent column algorithm bug
    }
});
