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




    $("#new_wardrobe")[0].reset();
    });

    });




        $('#new_suitcase').on('submit',function(event){


        event.preventDefault();
        $.ajax({

        url:'/suitcases',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method:'POST',
        dataType: "json",
        data:  $('#new_suitcase').serialize()


      }).done(function(wardrobe){
        var one = $('<a href="http://localhost:3000/suitcase/' + suitcase.id +  '" >' + suitcase.name + '</a>');
        var two = $ ('.allsuitcase').append("<li class='mysuitcase'>").append(one);




        $("#new_suitcase")[0].reset();
        });

      });





});
