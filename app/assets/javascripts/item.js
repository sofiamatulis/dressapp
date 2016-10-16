$( document ).on('turbolinks:load', function() {
$('.add-to-suitcase').on('click', function(){
$('.suitcase-dropdown').fadeIn();
$('#item-to-suitcase').on('submit', function(){
  $('.suitcase-dropdown').fadeOut();
  $('<p id="item-added-suitcase">Item Added!</p>').appendTo('.item-info');
  setTimeout( function() {
    $("#item-added-suitcase").fadeOut();
    $("#item-added-suitcase").remove();
}, 2000 );

});
});


})
