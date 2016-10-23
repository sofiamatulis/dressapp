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
        var coordinates = results[0].geometry.location.lat() + ", " + results[0].geometry.location.lng();
        console.log(coordinates);
        // after getting the lat and long, use this in the ajax request to google to receive a photo reference
          $.ajax({
            url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + coordinates + '&radius=5000&type=landscape&keyword=tourism&key=AIzaSyAEmJ_uxarY1GFaiWbHvyX-AEkOK90rdyU',
            method: 'GET',
            data:{},
            dataType: 'json'
          }).done(function(response) {
            console.log(response);
          });
      } else {
        alert("Unable to retrieve destination" + status);
      }  
    });

  });

});
