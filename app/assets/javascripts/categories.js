$( document ).on('turbolinks:load', function(){
  console.log("test");
$('.filter-btn').on('click',function(event){
  event.preventDefault();
  var value = $(this).attr('value');
  // save the value of the attribute

  // get the json data from the provided website depending on what value was clicked
  $.ajax({
    url: '/categories/' + value + '.json',
    method: 'GET',
    data: {},
    dataType: 'json'
  }).done(function(data){
    // clear the html within the original show.html.erb
    $('.new-tops').html('')

    // loop through the data array that was given
    for(var i = 0, l = data.length; i < l; i++){
      // populate the data with the given information set up exactly like your original html
      populate(data, i)
    }

  }).fail(function(data){
    console.log('this failed')
  })
})

function populate(data, i){
  $('<div>').attr('class', 'small-6 large-3 columns').attr('id', 'columns' + data[i]['id']).appendTo('.row')
  $('<div>').attr('class', 'wardrobe-item').attr("id", "wardrobe-item" +data[i]['id']).appendTo('#columns' + data[i]['id'])
  $('<label>').attr('class', 'selectd-item').attr('id','selectd-item' + data[i]['id']).appendTo('#wardrobe-item'+ data[i]['id'])
  $('<li>').attr('class', 'item-details').attr('id', 'item-for-link' + data[i]['id']).appendTo('#selectd-item' + data[i]['id'])
  $('<a>').attr('class','item-link').attr('id', 'item-link' +data[i]['id']).attr('href', '/items/' + data[i]['id']).appendTo('#item-for-link' + data[i]['id'])
  $('<img>').attr('src', data[i]['image']).attr('alt',data[i]['description']).appendTo('#item-link' +data[i]['id'])
  $('<li>').attr('class', 'item-details check-box').attr('id','checkbox' + data[i]['id']).appendTo('#selectd-item'+ data[i]['id'])
  $('<input />', { type: 'checkbox', id: 'items_'+ data[i]['id'], value: '1', name: 'items[' +data[i]['id'] + ']' }).appendTo('#checkbox' + data[i]['id']);
  $('<li>').attr('class','item-details').html(data[i]['name']).appendTo('#selectd-item'+data[i]['id'])
  $('<li>').attr('class','item-details').html(data[i]['description']).appendTo('#selectd-item'+data[i]['id'])
}

$('#all-items').on('click',function(event){
  event.preventDefault();
  $.ajax({
    url: '/items.json',
    method: 'GET',
    data: {},
    dataType: 'json'
  }).done(function(data){
    $('.row').html('')
    for(var i = 0, l = data.length; i < l; i++){

      populate(data, i)
    }
  }).fail(function(data){
    console.log('this failed')
  })
})
});
