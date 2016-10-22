$( document ).on('turbolinks:load', function() {

// opening suitcase
  $("#open-nav").on('click', function() {
    // if the user is not on a computer, open nav all the way
	     if ($(window).width() <= 1000) {
        document.getElementById("suitcase-side-nav").style.width = "100%";
        document.getElementById("suitcase-main").style.marginLeft = "100%";
    	 }
       if ($(window).width() > 1000) {
        document.getElementById("suitcase-side-nav").style.width = "60%";
        document.getElementById("suitcase-main").style.marginLeft = "60%";
       }

    $('.side-nav-contents').fadeIn(100);
    if ( $('#add-items').hasClass('button-active') ) {
      $('#add-items').trigger('click');
    }
    $("#sortable1").addClass("is-open");
    $(this).html("");
    // $(".outfit-checker-container").css("display", "block");
      if ( !$(".clothes-container").children().hasClass('slick-slider') ) {
        createSlider();
        $(".outfit").trigger("click");
      }
    $(".weather").fadeOut(100);
  });

// closing nav
  $("#close-nav").on('click', function() {
    $("#open-nav").html("Open Suitcase");
    $('.side-nav-contents').fadeOut(100);
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
    $("#sortable1").removeClass("is-open");
    $(".suitcase-destination").removeClass("small");
    $(".weather").fadeIn(100);
    // resetting the defaults
    setTimeout( function() {
      $("#items-grid-container" ).empty();
      // if ( $(".clothes-container").children().hasClass('slick-slider') ) {
      //   uncreateSlider();
      // }
    }, 1000 );

  });

// creates the carousel
function createSlider() {

   if ($('.tops-container').find('img').length > 1) {
      $('.tops-container').slick( {
        prevArrow: '<span class="arrow-left outfit"><</span>',
        nextArrow: '<span class="arrow-right outfit">></span>',

      });
    }

    if ($('.bottoms-container').find('img').length > 1) {
      $('.bottoms-container').slick( {
        prevArrow: '<span class="arrow-left outfit"><</span>',
        nextArrow: '<span class="arrow-right outfit">></span>',
      });
    }

    // if ($('.dresses-container').find('img').length > 1) {
    //   $('.dresses-container').slick( {
    //     prevArrow: '<span class="arrow-left outfit dress"><</span>',
    //     nextArrow: '<span class="arrow-right outfit dress">></span>',
    //   });
    // }

    if ($('.shoes-container').find('img').length > 1) {
      $('.shoes-container').slick( {
        prevArrow: '<span class="arrow-left outfit"><</span>',
        nextArrow: '<span class="arrow-right outfit">></span>',
      });
    }
  }


// not sure if this is needed, but can be used incase
function uncreateSlider() {
  if ($('.tops-container').hasClass('slick-slider')) {
    $('.tops-container').slick('unslick');
  }
  if ($('.bottoms-container').hasClass('slick-slider')) {
    $('.bottoms-container').slick('unslick');
  }
  if ($('dresses-container').hasClass('slick-slider')) {
    $('.dresses-container').slick('unslick');
  }
  if ($('.shoes-container').hasClass('slick-slider')) {
    $('.shoes-container').slick('unslick');
  }
}

// function to make text appear when item is dragged and added
  function itemAddedBubble() {
    $('<p id="item-added-message">Item Added!</p>').appendTo('#sortable1');
    setTimeout( function() {
      $("#item-added-message").fadeOut();
      $("#item-added-message").remove();
  }, 2000 );

}
// if the user is on device smaller than desktop, add items button will direct to
// wardrobe page
if ($(window).width() <= 1000) {
  $('#add-items').css("display", "none");
  $('#add-items-small').css("display", "inline-block");
};

// when you click add-items button
  $('#add-items').on('click', function() {
    // if device is full laptop size or desktop, allow drag and drop
    if ($(window).width() > 1000) {
     $(".outfit-checker-container").css("display", "none");
     $(".clothes-types").fadeOut(100);
     $("#view-all-in-suitcase-container").css("display", "none");
     $('#items-grid-container').fadeIn(100);
     $(".suitcase-destination").addClass("small");
    }
// showing that the view all is active
    $('#add-items').addClass('button-active');

//ajax call , get the items
    $.ajax({
      url: '/items',
      method: 'GET',
      data: {},
      dataType: 'JSON'
    }).done(function(response) {
      // console.log(response);
      //create variable with the sortable items that can be dragged
      var itemsContainer = $('<div id="sortable2" class="connectedSortable">');
//iterating through each item and adding the photo to its own container
      $.each(response, function(i, item) {
        var itemContainer = $('<div class="style-one">');
        // added data attribute to each object so they are all different
        $('<img>').attr('src', item.image).attr('data-item-id', item.id).attr('data-item-category', item.category_id).appendTo(itemContainer);
        $(itemContainer).appendTo(itemsContainer);

        });

        //creating the drag and drop: connecting them through a class

      $('#items-grid-container').html(itemsContainer);
      $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable",
        scroll: false,
        activate: function () {
          // alert("sorting!");
          console.log("sorting");
          $("#suitcase-side-nav").addClass("is-dragging");
        },
        deactivate: function() {
          $("#suitcase-side-nav").removeClass("is-dragging");
        },
        //saving this to the database! so when you add an item to the suitcase it saves in the suitcase
        receive: function(event,ui){
          $.ajax( {
            url: '/items_suitcases/', // this specific url
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            method: 'POST',
            data: {item_id : ui.item.find('img').attr('data-item-id'), suitcase_id : $(event.target).attr('data-suitcase-id'), category_id: ui.item.find('img').attr('data-item-category') }, // 1) figure out data type for input/output 2) how to add the item you are trying to add into the collection of the suitcase
            dataType: 'html'
          }).done(function(response) {
            // console.log(response);
            // item added text appears
            itemAddedBubble();
            // appending the response to the outfit checker page
            $(".outfit-checker").html(response);
            // appending the response to the view all page
              $.ajax({
                url: window.location.href,
                method: 'GET',
                data: {},
                dataType: 'html'
              }).done(function(response) {
                console.log('it reached the end!');
                var itemsTotal = $(response).find('#delete-suitcase-item');
                $("#view-all-in-suitcase-container").html(itemsTotal);
                console.log(itemsTotal);
              });
          });
        }
      }).disableSelection();
    });
  });

// resets the outfit checker when you click "outfit checker" button
  $('#outfit-checker-button').on('click', function() {
    $("#view-all-in-suitcase-container").css("display", "none");
    $("#items-grid-container" ).empty();
    $(".clothes-types").fadeIn(100);
    $(".suitcase-destination").removeClass("small");
    if ( $('#add-items').hasClass('button-active') ) {
      $('#add-items').removeClass('button-active');
    }

      setTimeout( function() {
        $('.outfit-checker-container').fadeIn(200);
        if ( !$(".clothes-container").children().hasClass('slick-slider') ) {
          createSlider();
        }

        $('.tops-container').get(0).slick.setPosition();
        $('.bottoms-container').get(0).slick.setPosition();
        $('.shoes-container').get(0).slick.setPosition();

        if ( $('.dresses-container').hasClass('active') ) {
          $('.dresses-container').get(0).slick.setPosition();
        }
        // $(".outfit").trigger("click");
    }, 300);

  });


  //view all button
  $('#view-all').on('click', function() {
    $("#items-grid-container" ).empty();
    $(".outfit-checker-container").css("display", "none");
    $(".suitcase-destination").addClass("small");
    $("#view-all-in-suitcase-container").fadeIn(100);
    $(".clothes-types").fadeOut(100);
    // if ( $(".clothes-container").children().hasClass('slick-slider') ) {
    //   uncreateSlider();
    // }
    if ( $('#add-items').hasClass('button-active') ) {
      $('#add-items').removeClass('button-active');
    }

    });

    // dresses/onesies button
    $(".dress-button").on('click', function() {
      $("#tops").css("display", "none");
      $("#bottoms").css("display", "none");
      $("#shoes").css("display", "none");
      $('.dresses-container').addClass('active');

      setTimeout( function() {
        $("#dresses").fadeIn(200);
        $(".arrow-right.outfit.dress").trigger("click");
        $("#shoes").fadeIn(200);
          if ($('.dresses-container').find('img').length > 1) {
            $('.dresses-container').slick( {
              prevArrow: '<span class="arrow-left outfit dress"><</span>',
              nextArrow: '<span class="arrow-right outfit dress">></span>',
            });
          }
          if ($('.shoes-container').find('img').length > 1 & !$('.shoes-container').hasClass('slick-slider') ) {
            $('.shoes-container').slick( {
              prevArrow: '<span class="arrow-left outfit"><</span>',
              nextArrow: '<span class="arrow-right outfit">></span>',
            });
          }
      }, 500);

    });
// tops/bottoms button
    $(".tops-bottoms").on('click', function() {
      $("#dresses").css("display", "none");
      $("#shoes").css("display", "none");
      $('.dresses-container').removeClass('active');

      setTimeout( function() {
        $("#tops").fadeIn(300);
        $("#bottoms").fadeIn(300);
        $("#shoes").fadeIn(300);
        //
        // if ( !$(".clothes-container").children().hasClass('slick-slider') ) {
        //   createSlider();
        // }
        $('.tops-container').get(0).slick.setPosition();
        $('.bottoms-container').get(0).slick.setPosition();
        $('.shoes-container').get(0).slick.setPosition();
        // $(".outfit").trigger("click");
      }, 500);
    });


});
