
$(function() {
  // var countryCode = ""
  var countriesList = ""
  var options = {
    url: '/resources/countries.json',
    getValue: function(country) {
      countriesList = country
      // console.log(country.name);
      return country.name;
    },
    list: {
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


// submitting the country
// document.getElementById('countryForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log("The form was not submitted");
// });

function countrySubmit() {
    var selectedCountry = document.getElementById("country").value;
    console.log(selectedCountry.name);
      for(var selectedCountry in countriesList){
        // console.log(countriesList[country]);
        document.getElementById("city").setAttribute('data-country', countriesList[selectedCountry]);
      }


  };

// this is not assigning the selected element to the variable
document.getElementById('countryForm').onchange = countrySubmit;




// calling the function for the city drop down.
  $('#city').cityAutocomplete();


});
