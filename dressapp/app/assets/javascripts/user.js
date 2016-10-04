
$(function() {
  var countriesList = {}
  var options = {
    url: '/resources/countries.json',
    getValue: "name",
    list: {
      onSelectItemEvent: function() {
        var value = $("#country").getSelectedItemData().code;
        document.getElementById("city").setAttribute('data-country', value);
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


function countrySubmit() {

  var value = $("#country").getSelectedItemData().code;
  console.log(value);
    // var selectedCountry = document.getElementById("country").value;
    // console.log(selectedCountry);
    // console.log(countriesList);
    //   for (i = 0; i < countriesList.length; i++) {
    //      if (countriesList[i].name === selectedCountry) {
    //         console.log(countriesList[i]); }
    //      else { console.log(fail); }
    //   }
    //   // for(var selectedCountry in countriesList){
        document.getElementById("city").setAttribute('data-country', value);
  };

// this is not assigning the selected element to the variable
// TODO: Convert to jQuery event handler
// document.getElementById('city').onclick = countrySubmit;



// calling the function for the city drop down.
  $('#city').cityAutocomplete();


});
