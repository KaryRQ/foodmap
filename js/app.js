/*vista splash */

$().ready(function () {
    $("#splash").fadeIn(0000).fadeOut(2000);
});

$(document).ready(function () {
    setTimeout(function () {
        $("#container2").fadeIn(1500);
    }, 2000);
});

/*busqueda por tipo de comida */
$(document).ready(function () {
    $('#buscador').keyup(function () {
        var tiposComida = $('.tiposComida');
        var buscar = $(this).val();
        var comida = '';
        for (var i = 0; i < tiposComida.length; i++) {
            comida = $(tiposComida[i]).html().toLowerCase();
            for (var x = 0; x < comida.length; x++) {
                if (buscar.length == 0 || comida.indexOf(buscar) > -1) {
                    $(tiposComida[i]).parents('.comida').show();
                } else {
                    $(tiposComida[i]).parents('.comida').hide();
                }
            }
        }
    });
});