$( document ).on('ready', function() {

  $('#view-all-in-suitcase-container').on('submit', 'form', function() {
    setTimeout( function() {
      $.ajax({
        url: $(this).attr("href"),
        method: 'GET',
        data: {},
        dataType: 'html'
      }).done(function(response) {
        console.log(response);
        var itemsTotal = $(response).find('form');
        $("#view-all-in-suitcase-container").html(itemsTotal);
      });
    }, 1000 );
  });
});
