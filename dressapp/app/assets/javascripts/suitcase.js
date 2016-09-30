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
      centerMode: true,
      // prevArrow: $('.arrow-left'),
      // nextArrow: $('.arrow-right'),
    });

    $('.bottoms-container').slick( {
      // prevArrow: '<button class="arrow-left">PREV</button>',
      // nextArrow: '<button class="arrow-right">NEXT</button>',
    });





    var slideWidth = $('.clothes-item span').width();
    //
    // function moveLeft() {
    //     $('.clothes-item img').animate({
    //         left: + slideWidth
    //     }
});
