$(function(){
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast?q=toronto,ca&appid=fd4c9c44f9db3eeec386cb22cff8a5a3',
    method: 'GET',
    data:{},
    dataType: 'json'
  }).done(function(data){
      console.log(data);
  });
});
