
$(function() {

  $('input#city').cityAutocomplete();

  // $.ajax( {
  //   url: 'http://easyautocomplete.com/resources/countries.json',
  //   method: 'GET',
  //   data: {},
  //   dataType: 'JSON'
  // }).done(function() {
  //
  // });

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

  $("#country").easyAutocomplete(options);

});
