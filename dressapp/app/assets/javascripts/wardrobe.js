$( document ).on('turbolinks:load', function() {
  console.log('wardrobe.js loaded!');
// function to get modal and form to add item
  $('.add-item').on('click', function(e){

    $('.modal-item').fadeIn();
    $('#modal-form').on('submit', function(e){
e.preventDefault();
      $('.modal-item').fadeOut();
    });
      $('#fileupload').fileupload({
        dataType: 'json',
        // data: $( this ).serialize(),
        add: function (e, data) {
          console.log(data);
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
          var checkBoxTag = $('<li class="item-details check-box">').append(checkBox);
          $('.wardrobe-item').append(name, description, imageappend, checkBoxTag);
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
    $( ".wardrobe-item" ).css('display', 'initial');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'inline');
    $( ".filtered-shoes" ).css('display', 'none');
  });

  $("#top-filter").click(function() {
    $( ".wardrobe-item" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'inline');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
  });

  $("#bottom-filter").click(function() {
    $( ".wardrobe-item" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'inline');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
  });

  $("#shoe-filter").click(function() {
    $( ".wardrobe-item" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'inline');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'none');
  });

})
