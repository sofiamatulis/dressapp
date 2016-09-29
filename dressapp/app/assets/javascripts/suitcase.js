$(function(){

  $("#open-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "100%";
    document.getElementById("suitcase-main").style.marginLeft = "100%";
  });

  $("#close-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
  });

  $(".arrow-right").on('click', function() {
      if ($('.clothes-item').hasClass('active')) {
        $('.clothes-item').removeClass('active').addClass('inactive');
        $('.clothes-item').next().removeClass('inactive').addClass('active');
      }
    });

  $(".arrow-left").on('click', function() {
      if ($('.clothes-item').hasClass('active')) {
        $('.clothes-item').removeClass('active').addClass('inactive');
        $('.clothes-item').prev().removeClass('inactive').addClass('active');
      }
    }); 
});
