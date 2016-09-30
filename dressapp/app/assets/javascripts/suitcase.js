$(function(){

  $("#open-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
  });

  $("#close-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
  });
  //
  // $(".arrow-right").on('click', function() {
  //     if ($('.clothes-item').hasClass('active')) {
  //       $('.clothes-item').removeClass('active').addClass('inactive');
  //       $('.clothes-item').next().removeClass('inactive').addClass('active');
  //     }
  //   });
  //
  // $(".arrow-left").on('click', function() {
  //     if ($('.clothes-item').hasClass('active')) {
  //       $('.clothes-item').removeClass('active').addClass('inactive');
  //       $('.clothes-item').prev().removeClass('inactive').addClass('active');
  //     }
  //   });


    $('.tops-container').slick( {
      prevArrow: '<span class="arrow-left"><</span>',
      nextArrow: '<span class="arrow-right">></span>',
    });

    $('.bottoms-container').slick( {
      prevArrow: '<span class="arrow-left"><</span>',
      nextArrow: '<span class="arrow-right">></span>',
    });

    $('.shoes-container').slick( {
      prevArrow: '<span class="arrow-left"><</span>',
      nextArrow: '<span class="arrow-right">></span>',
    });



    var slideWidth = $('.clothes-item span').width();
    //
    // function moveLeft() {
    //     $('.clothes-item img').animate({
    //         left: + slideWidth
    //     }
});
