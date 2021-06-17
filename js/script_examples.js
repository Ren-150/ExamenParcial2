$(document).ready(function () {

    //ejemplo 5: Mostrar imagen 2:

    $('#MImagen2').click(function () {
        $('#img2').show("fast");
    });

    //ejemplo 6: Ocultar imagen 2:

    $('#HImagen2').click(function () {
        $('#img2').hide("fast");
    });


    //ejemplo 7: Limpiar formulario

    $('#Limpiar1').click(function () {
        $('#prod').val('');
        $('#cant').val('');
        $('#precio').val('');
    });

    //ejemplo 8: Calcular Monto
    $('#calcularmont').click(function () {
        var prod = $('#prod').val();
        var precio = $('#precio').val();
        var cant = $('#cant').val();
        var resultado = cant * precio;
        $('#desc').text(prod);
        $('#res').text(resultado);
    });

    //ejemplo 9: Limpiar Monto
    $('#Limpiar2').click(function () {
        $('#desc').text('');
        $('#res').text('0');
    });

});