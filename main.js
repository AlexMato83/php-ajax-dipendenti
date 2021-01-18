

function ageSelector() {
  var age;
  if($('#eta').val()) {
    var etaInserita = $('#eta').val();

    return age = etaInserita;
  } else {
    return age = null;
  }
}

function handlebars(name,surname,age) {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var context = { 
    name: name,
    surname: surname,
    eta: age 
  };

  var html = template(context);
  return html;
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
            if(age != null) {
              
              
              if(age == element.eta) {
                var html = handlebars(element.nome,element.cognome,element.eta);
                console.log(html);
                $('.container').append(html)
              }
            } else {
              
                var html = handlebars(element.nome,element.cognome,element.eta);
                $('.container').append(html)
              
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