
$(function() {

  var options = {
    url: '/resources/countries.json',
    getValue: "name",
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
document.getElementById('countryForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("The form was not submitted");
});

function countrySubmit() {
    console.log("submit");
  };

document.getElementById('countryForm').onsubmit = function() { countrySubmit() };



// calling the function for the city drop down.
  $('#city').cityAutocomplete();


});
