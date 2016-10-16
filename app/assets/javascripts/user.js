$( document ).on('turbolinks:load', function() {
  if($('body').is('.user-show')) {

    //js for working with modals
    $('#new-wardrobe').on('click', function(){
      $('.modal-wardrobe').fadeIn();
      $(document).keyup(function(e){
        if (e.which === 27){
        $('.modal-wardrobe').fadeOut();
        }
      });
      $('.close').on('click', function(){
        $('.modal-wardrobe').fadeOut();
      });
      $('#new_wardrobe').on('submit', function(){
        $('.modal-wardrobe').fadeOut();
        // $('#allwardrobe').append('<img src="/clothes-wardrobe.png" height="100px" width="auto">');

      });

       $('.modal-wardrobe').click( function(){close()});
       $('#wardrobe_name').click( function(event){notError(event)});
       $('#create-wardrobe').click( function(event){notError(event)});

        function notError(event){
          event.stopPropagation();
          $('input').removeClass('error');
        }


    function close(){

      $('.modal-wardrobe').fadeOut('slow');
    }

    });

    $('#new-suitcase').on('click', function(){
      $('.modal-suitcase').fadeIn();
      $(document).keyup(function(e){
        if (e.which === 27){
        $('.modal-suitcase').fadeOut();
        }
      });
      $('.close').on('click', function(){
        $('.modal-suitcase').fadeOut();
      })
      $('#new_suitcase').on('submit', function(){
        $('.modal-suitcase').fadeOut();

      });



      $('.modal-suitcase').click( function(){close1()});
      $('#suitcase_name').click( function(event){notError1(event)});
      $('#suitcase_description').click( function(event){notError1(event)});
      $('#suitcase_duration').click( function(event){notError1(event)});
      $('#country').click( function(event){notError1(event)});
      $('#city').click( function(event){notError1(event)});
      $('#create-suitcase').click( function(event){notError1(event)});
      $('.easy-autocomplete-container').click( function(event){notError1(event)});



      function notError1(event){
         event.stopPropagation();
       $('input').removeClass('error');
      }

      function close1(){

        $('.modal-suitcase').fadeOut('slow');
      }

  });


    // js for suitcase form
    var destination = ""
    var options = {
      url: '/resources/countries.json',
      getValue: "name",
      list: {
        onSelectItemEvent: function() {
          var value = $("#country").getSelectedItemData().code;
          $("#city").attr('data-country', value);
          destination = value
        },
        match: {
          enabled: true
        },
        maxNumberOfElements: 8
      },

      template: {
        type: "custom",
        method: function(value, item) {
          return "<span class='flag flag-" + (item.code).toLowerCase() + "' ></span>" + value;
        }
      },
      theme: "round"
    };

    window.options = options;
  // calling the function for the country drop down
    $("#country").easyAutocomplete(options);

  // calling the function for the city drop down.
    $('#city').cityAutocomplete();
    var left = $('#city').css('left')
    var top = $('#city').css('top')
    $('.city-autocomplete').css('left', left);
    $('.city-autocomplete').css('top', top);
    $('.easy-autocomplete').css('width', '')
    $('.easy-autocomplete').css('right', '2px')
    $('.easy-autocomplete').css('top', '6px')
    $('#country').css('box-shadow', '2px 2px 5px #AFE9FF')

    $('#new_suitcase').on('submit',function(event){
        event.preventDefault();
        var cityChoice = $("#city").val();
        var cityCountryChoice = cityChoice + ',' + destination
        console.log(cityCountryChoice);
        $('#destination').val(cityCountryChoice);
  // making ajax call for post after city/country choice is defined
            $.ajax({
              url:'/suitcases',
              beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
              method:'POST',
              dataType: "json",
              data:  $('#new_suitcase').serialize()
            }).done(function(suitcase){
              var one = $('<a class="each-suitcase" href="http://localhost:3000/suitcases/' + suitcase.id +  '" >' + '<img src="/assets/suitcase1.png">' + '</a>');
              var two = $ ('.allsuitcase').append("<li class='mysuitcase'>").append(one).append('<p class="suitcasename">' + suitcase.name + '</p>');
              $( "#create-suitcase").prop( "disabled", false );
              $("#new_suitcase")[0].reset();
              $("#countryForm")[0].reset();
              $("#city").attr("data-country", "");
           });
      });

}
//hover function



  $('.name-wardrobe').hover(function(){

// created variable mybox and whatever im hovering on (this), calling the parent my wardrobe and finding the class my box thats inside of this parent too
    var mybox = $(this).parent("li.mywardrobe").find('.mybox');
    var mywardrobe = $(this).attr("href");
    console.log(mywardrobe);

    // console.log('start');
    //ajax get request to just show the thumbnail

    $.ajax({
      url: mywardrobe + '/thumbnail',
      method:'GET',
      dataType: "html",

      //show the my box variable
      }).done(function(wardrobe){
        // console.log('done');
         mybox.html(wardrobe);
         mybox.show();
        // console.log(wardrobe);
      });
// hide when not hovering!
    }, function() {
    var mybox = $(this).parent("li.mywardrobe").find('.mybox');
      mybox.hide();

    });

  });
