$( document ).on('ready', function() {


  // creates the carousel
  function createSlider() {
      $('.tops-container').slick( {
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow-left outfit"><</span>',
        nextArrow: '<span class="arrow-right outfit">></span>',
      });

      $('.bottoms-container').slick( {
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow-left outfit"><</span>',
        nextArrow: '<span class="arrow-right outfit">></span>',
      });

      $('.dresses-container').slick( {
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow-left outfit"><</span>',
        nextArrow: '<span class="arrow-right outfit">></span>',
      });

      $('.shoes-container').slick( {
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow-left outfit"><</span>',
        nextArrow: '<span class="arrow-right outfit">></span>',
      });
    }

  $('#view-all-in-suitcase-container').on('submit', 'form', function() {
    setTimeout( function() {
      $.ajax({
        url: $(this).attr("href"),
        method: 'GET',
        data: {},
        dataType: 'html'
      }).done(function(response) {
        console.log(response);
        var itemsTotal = $(response).find('#delete-suitcase-item');
        $("#view-all-in-suitcase-container").html(itemsTotal);

        var outfitCheckerNew = $(response).find('.outfit-checker');
        console.log()
        $(".outfit-checker-container").html(outfitCheckerNew);
        createSlider();
        console.log(outfitCheckerNew);
      });
    }, 1000 );
  });
});
