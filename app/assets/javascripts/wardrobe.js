$( document ).on('turbolinks:load', function() {

  // function to get modal and form to add item
  $('.add-item').on('click', function(e){
    $('.modal-item').fadeIn();
    $(document).keyup(function(e){
      if (e.which === 27){
      $('.modal-item').fadeOut();
      }
    });
    //fade in and out when creating item

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
        $('.no-items').remove();
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
        var checkBoxTag = $('<li class="item-details check-box">').append(checkBox).appendTo(label);
        var itemContainer = $('<div class="wardrobe-item">').append(label, name, description);
        var column = $('<div class="small-6 large-3 columns">').append(itemContainer);
        $('.wardrobe-item-container').find('.row:last').append(column);

        // $(itemContainer).appendTo('.wardrobe-item-container');
        $("#modal-form")[0].reset();
        $('.upload-button').remove();

        // reset the form and remove the extra upload buttons


    }
    });
  });
  $('#select-all').on('click', function(){
    console.log("clicked");
    $(this).val( ($(this).val() == 'Check' ? 'Uncheck' : 'Check') );
    $('input:checkbox').prop('checked', ($(this).val() == 'Check'));
    $('#select-all').html( ($(this).html() == 'Deselect All' ? 'Select All' : 'Deselect All') );
    $('.category-dropdown').fadeIn();

  });

  $('input:checkbox').change(function(){
    $('.category-dropdown').fadeIn();
    $('.item-link').removeAttr('href');
    $('.selectd-item').find('img').click(function(){
      $(this).toggleClass('item-selected');

    });

  });


  // Filter items on wardrobe show view

  $("#search-button").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".search-form-results" ).css('display', 'inline');
  })

  $( "#all-items" ).click(function() {
    $( ".wardrobe-item-container" ).css('display', 'initial');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
    $( ".search-form-results" ).css('display', 'none');
  });

  $("#top-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'inline');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
    $( ".filtered-others" ).css('display', 'none');
  });

  $("#bottom-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'inline');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
    $( ".filtered-others" ).css('display', 'none');
  });

  $("#shoe-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'inline');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
    $( ".filtered-others" ).css('display', 'none');
  });

  $("#dress-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'inline');
    $( ".filtered-others" ).css('display', 'none');
  });
  $("#other-filter").click(function() {
    $( ".wardrobe-item-container" ).css('display', 'none');
    $( ".filtered-shoes" ).css('display', 'none');
    $( ".filtered-bottoms" ).css('display', 'none');
    $( ".filtered-tops" ).css('display', 'none');
    $( ".filtered-dresses" ).css('display', 'none');
    $( ".filtered-others" ).css('display', 'inline');
  });


  $('#wardrobe-edit-button').on('click', function(e){
      e.preventDefault();
      $('.modal-edit').fadeIn();

      $(document).keyup(function(e){
        if (e.which === 27){
        $('.modal-edit').fadeOut();
        }
      });

      $('.close').on('click', function(){
        $('.modal-edit').fadeOut();
      });

      $('.edit-wardrobe').on('submit', function(e){
        e.preventDefault();
        $('.modal-edit').fadeOut();
      });

  });
})
