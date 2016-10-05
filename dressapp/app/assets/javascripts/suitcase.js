$(function(){

  $("#open-nav").on('click', function() {
    $(".arrow-right").trigger("click");
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
      $("#add-items").css("display", "inline-block");
    }, 1000 );
  });

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
    $("#add-items").css("display", "none");
    $("#outfit-checker-button").css("display", "inline-block");
    $.ajax( {
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
        $('<img>').attr('src', item.image).attr('data-item-id', item.id).appendTo(itemContainer);
        $(itemContainer).appendTo(itemsContainer);
        });
        
      $('#items-grid-container').html(itemsContainer);
      $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable",
        receive: function(event,ui){
              // console.log(ui.item);
              // console.log(ui.item.find('img').attr('data-item-id'));
              // console.log($(event.target).attr('data-suitcase-id'));
              //ajax! data attributes
          $.ajax( {
            url: '/items_suitcases/', // this specific url
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            method: 'POST',
            data: {item_id : ui.item.find('img').attr('data-item-id'), suitcase_id : $(event.target).attr('data-suitcase-id') }, // 1) figure out data type for input/output 2) how to add the item you are trying to add into the collection of the suitcase
            dataType: 'json'

          })
        }
      }).disableSelection();
    });
  });

  $('#outfit-checker-button').on('click', function() {
    $("#items-grid-container" ).empty();
    $(".outfit-checker").css("display", "block");
    $("#outfit-checker-button").css("display", "none");
    $("#add-items").css("display", "inline-block");
    document.getElementById("suitcase-side-nav").style.width = "40%";
    document.getElementById("suitcase-main").style.marginLeft = "40%";
  });
});
