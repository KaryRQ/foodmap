/*vista splash */

$().ready(function () {
    $("#splash").fadeIn(0000).fadeOut(2000);
});

$(document).ready(function() {   
    setTimeout(function() {
        $("#container2").fadeIn(1500);
    },2000);
});



$(document).ready(function(){
    $('#buscador').keyup(function(){
       var tipo = $('.tipo');
       var buscar = $(this).val();
       var comida='';
       for( var i = 0; i < tipo.length; i++ ){
           comida = $(tipo[i]).html().toLowerCase();
            for(var x = 0; x < comida.length; x++ ){
                if( buscar.length == 0 || comida.indexOf( buscar ) > -1 ){
                    $(tipo[i]).parents('.comida').show(); 
                }else{
                     $(tipo[i]).parents('.comida').hide();
                }
            }
       }
    });
  });

  $(document).ready(function() {
    $('#cerrar').click(function() {
      $('#buscador').val('');
    });
  });