

function ageSelector() {
  var age;
  if($('#eta').val()) {
    var etaInserita = $('#eta').val();

    return age = etaInserita;
  } else {
    return age = null;
  }
}

function chiamata(url,age) {

  $.ajax(
      {
        'url': url,
        'method': 'GET',
        'success': function(risposta){
          
          $('.container').html('');
          for (let index = 0; index < risposta.length; index++) {
            const element = risposta[index];
            console.log(age);
            if(age != null) {

              if(age == element.eta) {

                $('.container').append("<div>" + element.nome + " - " + element.eta + "</div>")
              }
            } else {
              $('.container').append("<div>" + element.nome + " - " + element.eta + "</div>")
              }
            
          }
        },
        'error':function(){
          alert(risposta);
        }
      }
  );
}

$(document).ready(function(){
    
    chiamata('server.php', age = null);

    

    $( "#eta" ).keyup(function() {
      chiamata('server.php', ageSelector());
    });
    
});