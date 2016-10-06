$( document ).on('ready turbolinks:load', function() {


  $('.center').slick( {
    prevArrow: '<span class="arrow-left"><</span>',
    nextArrow: '<span class="arrow-right">></span>',
    autoplay: true,
    autoplaySpeed: 1600,
    speed: 1000,
    fade: true,
  });


});
