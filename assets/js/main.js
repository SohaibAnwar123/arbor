// hero slick start 
$('.arbor_slick').slick({
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

// client logo slick start 
$('.clients_logoSlick').slick({
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next1',
    prevArrow: '.slick-prev1',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }]
});
// client logo slick end

// back top start 
$(document).ready(function () {
    var backToTopButton = $("#back-to-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            backToTopButton.fadeIn();
        } else {
            backToTopButton.fadeOut();
        }
    });

    backToTopButton.click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
});
// back top end

// onclick subdrop open start 


// onclick subdrop open end