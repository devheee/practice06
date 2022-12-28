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
        $('.mainContent .contents_wrap').eq(idx).addClass('on').siblings().removeClass('on')
    })

    $('.newsslide').slick({
        arrows: false,
        autoplay: false,
        slidesToShow:4,
        slidesToScroll: 4,
        rows:2
    });
})