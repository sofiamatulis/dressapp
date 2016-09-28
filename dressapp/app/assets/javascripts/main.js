$(function(){

$('.wardrobebutton').click( function(){ addWardrobe() });
$('.close').click( function(){close()});
  // $('.submit').click( function(event) { error(event) });
  // $('input').click( function(event){notError(event)});


function addWardrobe(){

    $('.modal').fadeIn('slow');


  }

  function close(){

      $('.modal').fadeOut('slow');
    }



});
