$(function() {
  $('.filter > a').on('click', function(e){
    e.preventDefault();
    // var array = [];
      $.ajax({
        url: $(this).attr('href'),
        method: 'GET',
        data: {},
        dataType: 'json'
      }).done(function(response) {

      })
  });
});
