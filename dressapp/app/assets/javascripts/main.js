$(function(){

$('.wardrobebutton').click( function(){ addWardrobe() });
$('.close').click( function(){close()});
$('.submit').click( function(){ submit() });



function addWardrobe(){

    $('.modal').fadeIn('slow');


  }

  function close(){

      $('.modal').fadeOut('slow');
    }

    function submit(){
      $.ajax({
          url:'/user',
          method:'POST',
          dataType: "html",
          data:  $(this).serialize(),
          success: function(data) {
            $('.wardrobe_list').prepend("<li class='wardrobe'"+ data.name +"</a>");
        }
       });
    }



});
