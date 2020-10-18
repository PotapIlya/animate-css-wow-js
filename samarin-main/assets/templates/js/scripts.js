$(function () {
    var header = $("#header__dark"),
        introH = $("#services").innerHeight(),
        scrollOffset = $(window).scrollTop();


    $(window).on("scroll",function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset>= introH ) {
            header.addClass("header-fixed");
        }else {
            header.removeClass("header-fixed");
        }
    }
    wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true
        }
    );
    wow.init();

    $('.slider__wrap').slick({
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        dots: true,
        dotsClass: 'header-dots'
    });
});