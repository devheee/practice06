$(function () {
    $('.mainSlide').slick({
        autoplay: false,
        arrows: true,
    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.num span').html((c + 1) + "&nbsp;")
        $('.num strong').text(s.slideCount)
    });

    $('.mainContent .title>li').on('click', function (event) {
        event.preventDefault();
        var _this = $(this);
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');

        $('.mainContent .tab').eq(idx).addClass('on').siblings().removeClass('on');

    })

    $('.newsslide').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2
    });

    $('.slide_arrow i:nth-child(1)').on('click', function () {
        $('.newsslide').slick('slickPrev')
    })

    $('.slide_arrow i:nth-child(2)').on('click', function () {
        $('.newsslide').slick('slickNext')
    })




    $(window).on('scroll', function () {
        var scr = $(window).scrollTop();
    });

    $(window).on('scroll', function () {
        var scr = $(window).scrollTop(); //스크롤 값을 구함
        if (scr > 600) {
            $('#toTop').fadeIn()
        } else {
            $('#toTop').fadeOut()
        }

        // scr > 300 ? $('#toTop').fadeIn() : $('#toTop').fadeOut()
    });

    $('#toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    })
})