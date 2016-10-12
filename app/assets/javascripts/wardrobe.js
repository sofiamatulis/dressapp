$( document ).on('turbolinks:load', function() {


  // function to get modal and form to add item
  $('.add-item').on('click', function(e){
    $('.modal-item').fadeIn();
    $(document).keyup(function(e){
      if (e.which === 27){
      $('.modal-item').fadeOut();
      }
    });

    $('.close').on('click', function(){
      $('.modal-item').fadeOut();
    });

    $('#modal-form').on('submit', function(e){
      e.preventDefault();
      $('.modal-item').fadeOut();
    });

    $('#fileupload').fileupload({
      dataType: 'json',
      // data: $( this ).serialize(),
      add: function (e, data) {
        data.context = $('<button/>').attr('class', 'upload-button').text('Upload').appendTo('#modal-form').click(function() {
          data.submit();
        });
      },

      done: function (e, data) {
        // console.log("INSIDE FILE UPLOADED 'DONE'");
        var responseData = data._response.result;
        // console.log(responseData);
        var name = $('<li class="item-details">').append(responseData.name);
        var description = $('<li class="item-details">').append(responseData.description);
        var image = $('<img>').attr("src", responseData.image);
        var imagelink = $('<a href="http://localhost:3000/items/' + responseData.id + '">').append(image);
        var imageappend = $('<li class="item-details">').append(imagelink);
        var label = $('<label class="selectd-item">').append(imageappend);
        var checkBox = $('<input type="checkbox">').attr('name', 'items[' + responseData.id + ']');
        var checkBoxTag = $('<li class="item-details check-box">').appendTo(label);
        var itemContainer = $('<div class="wardrobe-item">').append(label, name, description);
        $(itemContainer).appendTo('.wardrobe-item-container');
        $("#modal-form")[0].reset();


    }


    });



  });

  $('#drop-down-show').on('click', function(){
    $('.category-dropdown').fadeIn();
    $('.item-link').removeAttr('href');
    $('.selectd-item').find('img').click(function(){
      $(this).toggleClass('item-selected');

    });
  });


  // Filter items on wardrobe show view
  $( "#all-items" ).click(function() {
    $( ".wardrobe-item-container" ).css('display', 'initial');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
  });

  $("#top-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'inline');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
  });

  $("#bottom-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'inline');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
  });

  $("#shoe-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'inline');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
  });

  $("#dress-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'inline');
  });
})
