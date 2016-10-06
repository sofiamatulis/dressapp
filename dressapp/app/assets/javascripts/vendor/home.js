$( document ).on('ready turbolinks:load', function() {




//hover function for the class box
//add data called photo , it is called data-photo in the HTML file
//when you hover it adds the class reveal (built in), it removes it when you don't hover 

  $('.box').hover(function(){
  $($(this).data('photo')).addClass('reveal');
}, function(){
  $($(this).data('photo')).removeClass('reveal');
});


});
