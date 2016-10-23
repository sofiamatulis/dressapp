$( document ).on('turbolinks:load', function() {

// sending ajax request to return the suitcase object for current suitcase
  $.ajax({
      url: window.location.href,
      method: 'GET',
      data:{},
      dataType: 'json'
  }).done(function(suitcase){
    console.log(suitcase);
// when it's done, take the suitcase's destination and get the lattitude and longitude
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': suitcase.destination }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());
      } else {
        alert("Something got wrong " + status);
      }
    });
  });

});
