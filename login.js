function loguear() {
    var usuario = document.getElementById("Usuario").value;
    var password = document.getElementById("Contrasena").value;
    if (usuario == "CEAS" && password == "Gohengy1") {
        window.location.href = "Empleado.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}