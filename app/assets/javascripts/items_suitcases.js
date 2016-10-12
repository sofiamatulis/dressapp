$( document ).on('ready', function() {

// var itemsTotal = $("#view-all-in-suitcase-container");

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
        debugger;
        $("#view-all-in-suitcase-container").html(itemsTotal);
      });
    }, 1000 );
  });
});
