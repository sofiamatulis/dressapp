$( document ).on('turbolinks:load', function() {


// opening suitcase
  $("#open-nav").on('click', function() {
    $(".outfit").trigger("click");
    $('#outfit-checker').fadeIn(100);
    $('.side-nav-buttons').fadeIn(100);
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
    $("#sortable1").addClass("is-open");
    $(this).html("");
  });
// closing nav
  $("#close-nav").on('click', function() {
    $("#open-nav").html("Open Suitcase");
    $('#outfit-checker').fadeOut(100);
    $('.side-nav-buttons').fadeOut(100);
    $('#suitcase-side-nav').css("overflow-x", "hidden");
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
    $("#sortable1").removeClass("is-open");
    $(".suitcase-destination").removeClass("small");
    setTimeout( function() {
      $("#items-grid-container" ).empty();
      $(".outfit-checker-container").css("display", "block");
      $("#outfit-checker-button").css("display", "none");
      $("#add-items").css("display", "inline-block");
      $("#view-all-in-suitcase-container").css("display", "none");
    }, 1000 );
  });

// creates the carousel
function createSlider() {
    $('.tops-container').slick( {
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span class="arrow-left outfit"><</span>',
      nextArrow: '<span class="arrow-right outfit">></span>',
    });

    $('.bottoms-container').slick( {
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span class="arrow-left outfit"><</span>',
      nextArrow: '<span class="arrow-right outfit">></span>',
    });

    $('.dresses-container').slick( {
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span class="arrow-left outfit"><</span>',
      nextArrow: '<span class="arrow-right outfit">></span>',
    });

    $('.shoes-container').slick( {
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span class="arrow-left outfit"><</span>',
      nextArrow: '<span class="arrow-right outfit">></span>',
    });
  }

// calls the carousel
  createSlider();


// function to make text appear when item is dragged and added
  function itemAddedBubble() {
    $('<p id="item-added-message">Item Added!</p>').appendTo('#sortable1');
    setTimeout( function() {
      $("#item-added-message").fadeOut();
      $("#item-added-message").remove();
  }, 2000 );

}

// when you click add-items button
  $('#add-items').on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "60%";
    document.getElementById("suitcase-main").style.marginLeft = "60%";
    $(".outfit-checker-container").css("display", "none");
    $("#add-items").css("display", "none");
    $("#outfit-checker-button").css("display", "inline-block");
    $("#view-all-in-suitcase-container").css("display", "none");
    $(".suitcase-destination").addClass("small");
    $.ajax({
      url: '/items',
      method: 'GET',
      data: {},
      dataType: 'JSON'
    }).done(function(response) {
      console.log(response);
      var itemsContainer = $('<div id="sortable2" class="connectedSortable">');
//iterating through each item and adding the photo to its own container
      $.each(response, function(i, item) {
        var itemContainer = $('<div class="style-one">');
                  // added data type to each object
        $('<img>').attr('src', item.image).attr('data-item-id', item.id).attr('data-item-category', item.category_id).appendTo(itemContainer);
        $(itemContainer).appendTo(itemsContainer);
        });

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
        receive: function(event,ui){
          $.ajax( {
            url: '/items_suitcases/', // this specific url
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            method: 'POST',
            data: {item_id : ui.item.find('img').attr('data-item-id'), suitcase_id : $(event.target).attr('data-suitcase-id'), category_id: ui.item.find('img').attr('data-item-category') }, // 1) figure out data type for input/output 2) how to add the item you are trying to add into the collection of the suitcase
            dataType: 'html'
          }).done(function(response) {
            console.log(response);
            // item added text appears
            itemAddedBubble();
            // appending the response to the outfit checker page
            $(".outfit-checker").html(response);
            createSlider();
            // appending the response to the view all page
            var itemsAdded = $(response).find('.clothes-item');
            console.log(itemsAdded.length);
            $("#view-all-in-suitcase-container").html(itemsAdded);
          });
        }
      }).disableSelection();
    });
  });


// resets the outfit checker when you click "outfit checker" button
  $('#outfit-checker-button').on('click', function() {
    // $(".outfit").trigger("click");
    $("#items-grid-container" ).empty();
    $(".outfit-checker-container").css("display", "block");
    $("#outfit-checker-button").css("display", "none");
    $("#add-items").css("display", "inline-block");
    $("#view-all-in-suitcase-container").css("display", "none");
    $(".suitcase-destination").removeClass("small");
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
  });


  //view all button
  $('#view-all').on('click', function() {
    $("#items-grid-container" ).empty();
    $(".outfit-checker-container").css("display", "none");
    $(".suitcase-destination").addClass("small");
    document.getElementById("suitcase-side-nav").style.width = "60%";
    document.getElementById("suitcase-main").style.marginLeft = "60%";
    $("#view-all-in-suitcase-container").css("display", "inline-block");


    });

    // dresses/onesies button
    $(".dress-button").on('click', function() {
      $("#tops").css("display", "none");
      $("#bottoms").css("display", "none");
      $("#dresses").css("display", "block");
      // $(".outfit").trigger("click");
      // $(this).hide();
      // $(".tops-bottoms").show();
    });
// tops/bottoms button
    $(".tops-bottoms").on('click', function() {
      // $(".outfit").trigger("click");
      $("#dresses").css("display", "none");
      $("#tops").css("display", "block");
      $("#bottoms").css("display", "block");
      // $(this).hide();
      // $(".dress-button").show();
    });


});
