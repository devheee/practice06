$(function () {
    $('.mainSlide').slick({
        autoplay: false,
        arrows: true,
    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.num span').html((c + 1) + "&nbsp;")
        $('.num strong').text(s.slideCount)
    });

})