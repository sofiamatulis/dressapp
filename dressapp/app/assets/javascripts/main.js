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


//       $('#imageUploadForm').on('submit',(function(event) {
//       event.preventDefault();
//       var formData = new FormData(this);
//
//       $.ajax({
//           type:'POST',
//           url: $(this).attr('action'),
//           data:formData,
//           cache:false,
//           contentType: false,
//           processData: false,
//           success:function(data){
//               console.log("success");
//               console.log(data);
//           },
//           error: function(data){
//               console.log("error");
//               console.log(data);
//           }
//       });
//   }));
//
//   $("#ImageBrowse").on("change", function() {
//       $("#imageUploadForm").submit();
//   });
// });








});
