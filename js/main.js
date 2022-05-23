$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleclass("active");
  });

  $(".user-nav").on("click", function () {
    $(".menu-wrapper").toggleClass("active");
  });

  $(".filter-trigger").on("click", function () {
    $(".filter-wrapper").css("display", "block");
  });

  $(".close-filtr").on("click", function () {
    $(".filter-wrapper").css("display", "none");
  });

  $(".close-blog-filtr").on("click", function () {
    $(".filter-blog-inner").css("display", "none");
  });

  $(".filter-trigger").on("click", function () {
    $(".filter-blog-inner").css("display", "block");
  });

  $(".footer-title").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });

  $(".container-slider").slick({
    dots: true,
    arrows: false,
  });

  $(".slider-main-wrapper").slick({
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    arrows: false,
  });

  $(".random-slider-wrapper").slick({
    slidesToShow: 2,
   
    responsive: [
      
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          arrows: false
        },
      },
    ],
  });

  $(".star").rateYo({
    ratedFill: "#efc162",
    starSvg:
      '<?xml version="1.0" ?><svg id="Layer_1" style="enable-background:new 0 0 612 792;" version="1.1" viewBox="0 0 612 792" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">\n' +
      "\t.st0{fill:#FCAF17;}\n" +
      '</style><g><polygon class="st0" points="306,153 216.4,298.9 50,339 161,469.3 147.8,639.9 306,574.6 464.2,639.9 451,469.3 562,339    395.6,298.9 306,153  "/></g></svg>',
  });

  $(".star-product").rateYo({
    ratedFill: "#efc162",
    starSvg:
      '<?xml version="1.0" ?><svg id="Layer_1" style="enable-background:new 0 0 612 792;" version="1.1" viewBox="0 0 612 792" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">\n' +
      "\t.st0{fill:#FCAF17;}\n" +
      '</style><g><polygon class="st0" points="306,153 216.4,298.9 50,339 161,469.3 147.8,639.9 306,574.6 464.2,639.9 451,469.3 562,339    395.6,298.9 306,153  "/></g></svg>',
  });

  $(".related-products-slider").slick({
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".slider-tabs").each(function () {
    let ths = $(this);
    ths.find(".slider-text-description").not(":first").hide();
    ths
      .find(".tabs")
      .click(function () {
        ths
          .find(".tabs")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
        ths
          .find(".slider-text-description")
          .hide()
          .eq($(this).index())
          .fadeIn();
      })
      .eq(0)
      .addClass("active");
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 40000,
    from: 10000,
    to: 30000,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
  });
});
