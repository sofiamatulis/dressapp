$( document ).on('turbolinks:load', function() {

    $('#new_wardrobe').on('submit',function(event){
      event.preventDefault();
      $.ajax({
        url:'/wardrobes',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method:'POST',
        dataType: "json",
        data:  $('#new_wardrobe').serialize()
      }).done(function(wardrobe){
        var link = $('<a class="link-text" href="http://localhost:3000/wardrobes/' + wardrobe.id +  '" >' + wardrobe.name + '</a>');
        var name = $ ('.allwardrobe').append("<li class='mywardrobe'>").append(link);

            if($('.mywardrobe').length != 0) {
                $('.link-text').css('color', 'black');
                $('.link-text').css('font-size', '30px');


        }

        $( "#create-wardrobe").prop( "disabled", false );
        $("#new_wardrobe")[0].reset();
      });

      $('#new_suitcase').on('submit',function(event){
        event.preventDefault();
        $.ajax({
          url:'/suitcases',
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          method:'POST',
          dataType: "json",
          data:  $('#new_suitcase').serialize()
        }).done(function(suitcase){
          var one = $('<a href="http://localhost:3000/suitcases/' + suitcase.id +  '" >' + suitcase.name + '</a>');
          var two = $ ('.allsuitcase').append("<li class='mysuitcase'>").append(one);
          $( "#create-suitcase").prop( "disabled", false );
          $("#new_suitcase")[0].reset();
       });
     });
   });
 })
