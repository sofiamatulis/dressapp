
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

// method to take destination inputs and compile them
  $("#create-suitcase").on('click', function(event){
     event.preventDefault();
     var cityChoice = $("#city").val();
     var cityCountryChoice = cityChoice + ',' + destination
     console.log(cityCountryChoice);
  });

});
