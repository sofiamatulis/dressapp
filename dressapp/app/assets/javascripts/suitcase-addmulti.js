$(function(){
// sends a request for 5 day weather for toronto.
//change toronto to city you want to request
// change ca to country code you want to request
// change cnt=5 where 5 is the days forecast you want
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=toronto,ca&cnt=5&appid=fd4c9c44f9db3eeec386cb22cff8a5a3',
    method: 'GET',
    data:{},
    dataType: 'json'
  }).done(function(data){
    var dt = new Date(data.list[0].dt * 1000);
    var iconCode = data.list[0].weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    var temp = Math.floor(data.list[0].temp.day - 273.15) + "\xB0 C";
    var main = data.list[0].weather[0].main;
    var desc = data.list[0].weather[0].description;
    var weather = $('.suitcase').append('<li>').append(dt);
    var weather2 = $('.suitcase').append('<li>').append(temp).append("<img src='" + iconUrl + "'>");
    var weather3 = $('.suitcase').append('<li>').append(main);
    var weather4 = $('.suitcase').append('<li>').append(desc);

      console.log(data);
  });
});
