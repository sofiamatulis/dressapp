$(function(){

  $("#open-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "100%";
    document.getElementById("suitcase-main").style.marginLeft = "100%";
  });

  $("#close-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
  });

  $('.clothes-images').on('click', function() {
    document.getElementsByClass('.clothes-images').carousel()
  });

});
