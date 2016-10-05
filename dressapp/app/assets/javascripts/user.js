$(function(){
  //js for working with modals
  $('#new-wardrobe').on('click', function(){
    $('.modal-wardrobe').fadeIn();
    $('#new_wardrobe').on('submit', function(){
      $('.modal-wardrobe').fadeOut();
    });
  })

  $('#new-suitcase').on('click', function(){
    $('.modal-suitcase').fadeIn();
    $('#new_suitcase').on('submit', function(){
      $('.modal-suitcase').fadeOut();
    });
  });

  //js for suitcase form
  var destination = ""
  var options = {
    url: '/resources/countries.json',
    getValue: "name",
    list: {
      onSelectItemEvent: function() {
        var value = $("#country").getSelectedItemData().code;
        $("#city").attr('data-country', value);
        destination = value
      },
      match: {
        enabled: true
      },
      maxNumberOfElements: 8
    },

    template: {
      type: "custom",
      method: function(value, item) {
        return "<span class='flag flag-" + (item.code).toLowerCase() + "' ></span>" + value;
      }
    },
    theme: "round"
  };
  window.options = options;
  // calling the function for the country drop down
  $("#country").easyAutocomplete(options);

  // calling the function for the city drop down.
  $('#city').cityAutocomplete();
  console.log('this still works');

  $('#new_suitcase').on('submit',function(event){
    event.preventDefault();
    var cityChoice = $("#city").val();
    var cityCountryChoice = cityChoice + ',' + destination;
    console.log(cityCountryChoice);
    $('#destination').val(cityCountryChoice);
    // making ajax call for post after city/country choice is defined
    $.ajax({
      url:'/suitcases',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      method:'POST',
      dataType: "json",
      data:  $('#new_suitcase').serialize()
    }).done(function(suitcase){
      var one = $('<a href="http://localhost:3000/suitcases/' + suitcase.id +  '" >' + suitcase.name + '</a>');
      var two = $ ('.allsuitcase').append("<li class='mysuitcase'>").append(one);
      $("#create-suitcase").prop( "disabled", false );
      $("#new_suitcase")[0].reset();
      $("#countryForm")[0].reset();
      $("#city").attr("data-country", "");
    });
  });
});
