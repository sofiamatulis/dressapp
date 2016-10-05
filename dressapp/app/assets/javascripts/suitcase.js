$( document ).on('ready turbolinks:load', function() {

// opening suitcase
  $("#open-nav").on('click', function() {
    $(".arrow-right").trigger("click");
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
  });
// closing nav
  $("#close-nav").on('click', function() {
    $('#suitcase-side-nav').css("overflow-x", "hidden");
    document.getElementById("suitcase-side-nav").style.width = "0";
    document.getElementById("suitcase-main").style.marginLeft= "0";
    setTimeout( function() {
      $("#items-grid-container" ).empty();
      $(".outfit-checker").css("display", "block");
      $("#outfit-checker-button").css("display", "none");
      $("#add-items").css("display", "inline-block");
    }, 1000 );
  });

// creates the carousel
function createSlider() {
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
  }

  createSlider();


  $('#add-items').on('click', function() {
    document.getElementById("suitcase-side-nav").style.width = "60%";
    document.getElementById("suitcase-main").style.marginLeft = "60%";
    $('#suitcase-side-nav').css("overflow-x", "visible");
    $(".outfit-checker").css("display", "none");
    $("#add-items").css("display", "none");
    $("#outfit-checker-button").css("display", "inline-block");
    $.ajax({
      url: '/items',
      method: 'GET',
      data: {},
      dataType: 'JSON'
    }).done(function(response) {
      console.log(response);
      var itemsContainer = $('<div id="sortable2" class="connectedSortable">');
//iterating through each item and adding the name and photo to its own container
      $.each(response, function(i, item) {
        var itemContainer = $('<div class="style-one">');
                  // $('<h4>').html(item.name).appendTo(itemContainer);
                  // added data type to each object
        $('<img>').attr('src', item.image).attr('data-item-id', item.id).attr('data-item-category', item.category_id).appendTo(itemContainer);
        $(itemContainer).appendTo(itemsContainer);
        });

      $('#items-grid-container').html(itemsContainer);
      $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable",
        scroll: false,
        receive: function(event,ui){
          $.ajax( {
            url: '/items_suitcases/', // this specific url
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            method: 'POST',
            data: {item_id : ui.item.find('img').attr('data-item-id'), suitcase_id : $(event.target).attr('data-suitcase-id'), category_id: ui.item.find('img').attr('data-item-category') }, // 1) figure out data type for input/output 2) how to add the item you are trying to add into the collection of the suitcase
            dataType: 'html'
          }).done(function(response) {
            // appending the response to the outfit checker page
              $(".outfit-checker").html(response);
              createSlider();
          });
        }
      }).disableSelection();
    });
  });

// resets the outfit checker when you click "outfit checker" button
  $('#outfit-checker-button').on('click', function() {
    $(".arrow-right").trigger("click");
    $("#items-grid-container" ).empty();
    $(".outfit-checker").css("display", "block");
    $("#outfit-checker-button").css("display", "none");
    $("#add-items").css("display", "inline-block");
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
  });


  $('.weather-details').slick( {
    prevArrow: '<span class="arrow-left"><</span>',
    nextArrow: '<span class="arrow-right">></span>',
  });

  //view all button
  $('#view-all').on('click', function() {
    $("#items-grid-container" ).empty();
    $(".outfit-checker").css("display", "none");
    document.getElementById("suitcase-side-nav").style.width = "60%";
    document.getElementById("suitcase-main").style.marginLeft = "60%";
  });


});
