$( document ).on('ready turbolinks:load', function() {

//hover function for the class box
//add data called photo , it is called data-photo in the HTML file
//when you hover it adds the class reveal (built in), it removes it when you don't hover

  $('.box').hover(function(){
  $($(this).data('photo')).addClass('reveal');
  $('.photo').css("display", "none");
  $('.photo').stop().fadeTo("fadein", 0.8);
  $('.photo').css("display", "");
  $('.photo').stop().fadeTo("fadeout", 1)

//fade in for the background

}, function(){
  $($(this).data('photo')).removeClass('reveal');

});


// $("#loader").fadeIn("slow", function() {
//     $(this).addClass("loader");
// });


//when document is complete loading
// $(document).ajaxComplete(function(){
//     if($('.mywardrobe').length != 0) {
//         $('.mywardrobe').css('font-size', '70px');
//     }
// });

// make hover function fade in

// $(function() {
//     $(".box").hover(function() {
//         $(this).stop().animate({
//             backgroundColor: "red"
//         }, 800);
//     }, function() {
//         $(this).stop().animate({
//             backgroundColor: "red"
//         }, 800);
//     });
//
//
// });


});
