var data = sessionStorage.getItem('user');

$("#mostraruser").html("<img src='imagenes/usuario2.png' alt='' width='25px' height='25px'><b style='margin-left:10px'>" + data + "</b>");


function pagina(op) {
    if (op == 1) {
        $("#todo").load("home.html");
    }
    if (op == 2) {
        $("#todo").load("persons.html");
    }
    if (op == 3) {
        $("#todo").load("operations.html");
    }
    if (op == 4) {
        $("#todo").load("examples.html");
    }
}

