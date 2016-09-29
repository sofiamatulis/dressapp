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
          url:'/wardrobes',
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          method:'POST',
          dataType: "json",
          data:  $('.getstarted').serialize(),
          success: function(wardrobe) {
            $('.allwardrobe').prepend("<li class='mywardrobe'<p>"+ wardrobe.name +"</p></li>");
        }
       });
    }


    $('form').on('submit',function(event){


    event.preventDefault();
    $.ajax({

    url:'/wardrobes',
    method:'POST',
    dataType: "html"
    data:  $('.getstarted').serialize()


    }).done(function(returnedData){
    $('.allwardrobe').prepend(returnedData);

    $("form")[0].reset();




});
