
$(function() {
  var destination = ""
  var options = {
    url: '/resources/countries.json',
    getValue: "name",
    list: {
      onSelectItemEvent: function() {
        var value = $("#country").getSelectedItemData().code;
        document.getElementById("city").setAttribute('data-country', value);
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


  // $('#new_suitcase').on('submit', function(event) {
    //  event.preventDefault();
    // method to take destination inputs and compile them
    //  var cityChoice = $("#city").val();
    //  var cityCountryChoice = cityChoice + ',' + destination
    //  console.log(cityCountryChoice);
    //  $('#destination').val(cityCountryChoice);

    // });

    $('#new_suitcase').on('submit',function(event){

      event.preventDefault();

      var cityChoice = $("#city").val();
      var cityCountryChoice = cityChoice + ',' + destination
      console.log(cityCountryChoice);
      $('#destination').val(cityCountryChoice);

      $.ajax({

        url:'/suitcases',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        method:'POST',
        dataType: "json",
        data:  $('#new_suitcase').serialize()

      }).done(function(suitcase){
          var one = $('<a href="http://localhost:3000/suitcases/' + suitcase.id +  '" >' + suitcase.name + '</a>');
          var two = $ ('.allsuitcase').append("<li class='mysuitcase'>").append(one);
          $( "#create-suitcase").prop( "disabled", false );

          $("#new_suitcase")[0].reset();

      });
  });


});
