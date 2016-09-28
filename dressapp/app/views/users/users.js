$(function(){

$('.wardrobebutton').click( function(){ addWardrobe() });
$('.modal').click( function(){close()});
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
