$(document).ready(function () {
    $('#enviar').click(function () {
        var nomap = $('#nomape').val();
        var correo = $('#correo').val();
        var telefono = $('#telefono').val();
        
        $('#nro1').text(nomap);
        $('#nro2').text(correo);
        $('#nro3').text(telefono);

    });
});

