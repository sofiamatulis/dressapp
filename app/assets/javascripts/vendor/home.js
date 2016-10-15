$( document ).on('ready turbolinks:load', function() {

//hover function for the class box
//add data called photo , it is called data-photo in the HTML file
//when you hover it adds the class reveal (built in), it removes it when you don't hover

  $('.box').hover(function(){
  $($(this).data('photo')).addClass('reveal');
  $('.photo').css("display", "none");
  $('.photo').stop().fadeTo("fadein", 0.8);
  $('.photo').css("display", "");
  $('.photo').stop().fadeTo("fadeout", 1)

//fade in for the background

}, function(){
  $($(this).data('photo')).removeClass('reveal');

});




});
