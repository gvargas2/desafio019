$(document).ready(function(){

  var url = 'https://api.darksky.net/forecast/';
  var key = '2309ad7b982c0913bc0b11a4b4459b16';
  var coords = {
    scl: '-33.4488897,-70.6692655',
  }
  
  $('#select').on('change',function(){
    $.ajax({
      url: url + key + '/' + coords['scl'],
      mathod: 'GET',
    }).then(function(data){
      console.log(data);
    });
  });
});
