$(function(){

    $('#new_wardrobe').on('submit',function(event){

      event.preventDefault();

      $.ajax({
        url:'/wardrobes',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method:'POST',
        dataType: "json",
        data:  $('#new_wardrobe').serialize()
      }).done(function(wardrobe){
        var link = $('<a href="http://localhost:3000/wardrobes/' + wardrobe.id +  '" >' + wardrobe.name + '</a>');
        var name = $ ('.allwardrobe').append("<li class='mywardrobe'>").append(link);

        $( "#create-wardrobe").prop( "disabled", false );

        $("#new_wardrobe")[0].reset();
      });

    });



});
