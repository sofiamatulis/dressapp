$(function(){

$('.wardrobebutton').on('click',function(event){

  //prevents the default from happening which is going to a new page

  event.preventDefault();

  $.ajax({
    url:'/wardrobes/new',
    method: 'POST',
    data:{},
    dataType: 'html'

  }).done(function(data){
    console.log(data);
  });

});


});
