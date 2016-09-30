$(function(){
// function to get modal and form to add item
  $('.add-item').click(function(e){
    e.preventDefault();
    console.log("clicked");
    $('.modal-item').fadeIn('fast');

    $('.modal-form').on('submit', function(event){
      event.preventDefault();
      $('.modal-item').fadeOut('slow');

      $.ajax({
        url: '/items',
        method: 'post',
        data: $(this).serialize(),
        dataType: 'json'
      }).done(function(response){
        $(".modal-form")[0].reset();
        var name = $('<li class="item-details">').append(response.name);
        var description = $('<li class="item-details">').append(response.description);
        var image = $('<img>').attr("src", response.image);
        var imagelink = $('<a href="http://localhost:3000/items/' + response.id + '">').append(image);
        var imageappend = $('<li class="item-details">').append(imagelink);
        $('.wardrobe-item').append(name, description, imageappend);


      });
      $('#item-create').prop("disabled", false);
    });


  })


//  function to get modal and form to add to suitcase
$('.add-to-suitcase').click(function(){
  $('.item-link').removeAttr("href");
  $('.item-link').click(function(){
    $(this).find('img').toggleClass("item-selected");
  })

});

})
