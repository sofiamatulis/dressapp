$(function(){
// sends a request for 5 day weather for toronto.
//change toronto to city you want to request
// change ca to country code you want to request
// change cnt=5 where 5 is the days forecast you want
$.ajax({
    url: window.location.href,
    method: 'GET',
    data:{},
    dataType: 'json'

}).done(function(data1){
  console.log(data1);
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + data1.destination + '&cnt=5&appid=fd4c9c44f9db3eeec386cb22cff8a5a3',
    method: 'GET',
    data:{},
    dataType: 'json'
  }).done(function(data){
    // sets variables to get and format the date given by the weather api
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    for (i = 0; i < 5; i++) {
      var dt = new Date(data.list[i].dt * 1000);
      var day = days[dt.getDay()];
      var month = months[dt.getMonth()];
      var date = dt.getDate();
      // sets variable to get the weather from the api (temp, icon, description)
      var temp = Math.floor(data.list[i].temp.day - 273.15) + "\xB0 C";
      var iconCode = data.list[i].weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      var desc = data.list[i].weather[0].description;
      // puts the weather below the suitcase class
      var weather1 = $('<span= class="weather-date">').append(day + " " + month + " " + date).append(temp).append("<img src='" + iconUrl + "'>").append(desc);
      var weather = $('<div class="weather-' + i + '">').append(weather1);
      var final = $('.weather').append(weather);


    
    };

    $('.weather').slick( {
      prevArrow: '<span class="arrow-left"><</span>',
      nextArrow: '<span class="arrow-right">></span>',
    });

  });




});
});
