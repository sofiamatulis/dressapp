$(function(){

  $('#new-wardrobe').on('click', function(){
    $('.modal-wardrobe').fadeIn();
    $('#new_wardrobe').on('submit', function(){
      $('.modal-wardrobe').fadeOut();
    });
  });

  $('#new-suitcase').on('click', function(){
    $('.modal-suitcase').fadeIn();
    $('#new_suitcase').on('submit', function(){
      $('.modal-suitcase').fadeOut();
    });
  });

})
