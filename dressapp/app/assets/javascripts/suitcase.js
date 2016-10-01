$(function(){

  $("#open-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
  });

  $("#close-nav").on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
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


    $('.tops-container').slick( {
      prevArrow: '<span class="arrow-left"><</span>',
      nextArrow: '<span class="arrow-right">></span>',
    });

    $('.bottoms-container').slick( {
      prevArrow: '<span class="arrow-left"><</span>',
      nextArrow: '<span class="arrow-right">></span>',
    });

    $('.shoes-container').slick( {
      prevArrow: '<span class="arrow-left"><</span>',
      nextArrow: '<span class="arrow-right">></span>',
    });

    $('#add-items').on('click', function() {
      document.getElementById("suitcase-side-nav").style.width = "60%";
      document.getElementById("suitcase-main").style.marginLeft = "60%";
      $(".outfit-checker").css("display", "none");
      $("#add-items").html("Outfit Checker");

      $.ajax( {
        url: '/items',
        method: 'GET',
        data: {},
        dataType: 'JSON'
      }).done(function(response) {
        console.log(response);
        var itemsContainer = $('<div>');

              $.each(response, function(i, item) {
                for (var i in item) {
                  console.log(item.name);
                }
                  $('<h1>').html(item.name).appendTo(itemsContainer);
                  $('<img>').attr('src', item.image).appendTo(itemsContainer);
              });

        $('#items-grid-container').html(itemsContainer);



      });

    });

});
