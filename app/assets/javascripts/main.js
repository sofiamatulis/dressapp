$( document ).on('turbolinks:load', function() {

  //creating a new wardrobe! when clicking on the button new wardrobe and appending it to the list

    $('#new_wardrobe').on('submit',function(event){
      event.preventDefault();
      $.ajax({
        url:'/wardrobes',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method:'POST',
        dataType: "json",
        data:  $('#new_wardrobe').serialize()
      }).done(function(wardrobe){
        var link = $('<a class="name-wardrobe" href="http://localhost:3000/wardrobes/' + wardrobe.id +  '" >' + '<img src="https://s3-us-west-2.amazonaws.com/packapp/assets/mainwardrobe.png">' + '</a>');
        var name = $("<li class='mywardrobe'>").append(link).append('<p class="wardrobename">' + wardrobe.name + '</p>').appendTo('.allwardrobe');

        //styling the result

            if($('.mywardrobe').length != 0) {
                $('.link-text').css('color', 'black');
                // $('.link-text').css('font-size', '30px');


        }

        //make sure you can create new wardrobes consicutively and form is empty again

        $( "#create-wardrobe").prop( "disabled", false );
        $("#new_wardrobe")[0].reset();
      });


    //   $('#new_suitcase').on('submit',function(event){
    //     event.preventDefault();
    //     $.ajax({
    //       url:'/suitcases',
    //       beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    //       method:'POST',
    //       dataType: "json",
    //       data:  $('#new_suitcase').serialize()
    //     }).done(function(suitcase){
    //       var one = $('<a class="each-suitcase" href="http://localhost:3000/suitcases/' + suitcase.id +  '" >' + '<img src="/assets/suitcase1.png">' + '</a>');
    //       var two = $ ('.allsuitcase').append("<li class='mysuitcase'>").append(one).append('<p class="suitcasename">' + suitcase.name + '</p>');
    //       $( "#create-suitcase").prop( "disabled", false );
    //       $("#new_suitcase")[0].reset();
    //    });
    //  });
   });
 });
