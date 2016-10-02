$(function(){

  $("#open-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
  });

  $("#close-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
    setTimeout( function() {
      $("#items-grid-container" ).empty();
      $(".outfit-checker").css("display", "block");
      $("#outfit-checker-button").css("display", "none");
      $("#add-items").css("display", "block");
    }, 1000 );
  });
  //the original carousel method from scratch:
  // $(".arrow-right").on('click', function() {
  //     if ($('.clothes-item').hasClass('active')) {
  //       $('.clothes-item').removeClass('active').addClass('inactive');
  //       $('.clothes-item').next().removeClass('inactive').addClass('active');
  //     }
  //   });
  //
  // $(".arrow-left").on('click', function() {
  //     if ($('.clothes-item').hasClass('active')) {
  //       $('.clothes-item').removeClass('active').addClass('inactive');
  //       $('.clothes-item').prev().removeClass('inactive').addClass('active');
  //     }
  //   });


    // $('.tops-container').slick( {
    //   prevArrow: '<span class="arrow-left"><</span>',
    //   nextArrow: '<span class="arrow-right">></span>',
    // });
    //
    // $('.bottoms-container').slick( {
    //   prevArrow: '<span class="arrow-left"><</span>',
    //   nextArrow: '<span class="arrow-right">></span>',
    // });
    //
    // $('.shoes-container').slick( {
    //   prevArrow: '<span class="arrow-left"><</span>',
    //   nextArrow: '<span class="arrow-right">></span>',
    // });

    $('#add-items').on('click', function() {
      document.getElementById("suitcase-side-nav").style.width = "60%";
      document.getElementById("suitcase-main").style.marginLeft = "60%";
      $(".outfit-checker").css("display", "none");
      $("#add-items").css("display", "none");
      $("#outfit-checker-button").css("display", "block");

      $.ajax( {
        url: '/items',
        method: 'GET',
        data: {},
        dataType: 'JSON'
      }).done(function(response) {
        console.log(response);
        var itemsContainer = $('<div class="suitcase-items-container">');
//iterating through each item and adding the name and photo to its own container
              $.each(response, function(i, item) {
                var itemContainer = $('<div class="suitcase-item-container">');
                  // $('<h4>').html(item.name).appendTo(itemContainer);
                  $('<img>').attr('src', item.image).appendTo(itemContainer);
                  $(itemContainer).appendTo(itemsContainer);
              });
        $('#items-grid-container').html(itemsContainer);
      });

    });

    $('#outfit-checker-button').on('click', function() {
      $("#items-grid-container" ).empty();
      $(".outfit-checker").css("display", "block");
      $("#outfit-checker-button").css("display", "none");
      $("#add-items").css("display", "block");
    });




    $( function() {
  $( "#sortable1, #sortable2" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
} );








});
