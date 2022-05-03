$(function(){
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleclass('active');
    });

    $(".star").rateYo({
        ratedFill: "#efc162",
        "starSvg": "<?xml version=\"1.0\" ?><svg id=\"Layer_1\" style=\"enable-background:new 0 0 612 792;\" version=\"1.1\" viewBox=\"0 0 612 792\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><style type=\"text/css\">\n" +
            "\t.st0{fill:#FCAF17;}\n" +
            "</style><g><polygon class=\"st0\" points=\"306,153 216.4,298.9 50,339 161,469.3 147.8,639.9 306,574.6 464.2,639.9 451,469.3 562,339    395.6,298.9 306,153  \"/></g></svg>"
    });


    $('.slider-thumbs').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.slider-main-items'
    });
    $('.slider-main-items').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-thumbs'
    });
});