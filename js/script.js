let audio = document.getElementById("audio");
let iconoPlay = document.getElementById("icono-play");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        iconoPlay.classList.remove("fa-play");
        iconoPlay.classList.add("fa-pause");
    } else {
        audio.pause();
        iconoPlay.classList.remove("fa-pause");
        iconoPlay.classList.add("fa-play");
    }
}

function saveForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var websiteUrl = document.getElementById('websiteUrl').value;
    var message = document.getElementById('message').value;

    var formData = "Nombre: " + name + "\n" +
        "Correo electrónico: " + email + "\n" +
        "Teléfono: " + phoneNumber + "\n" +
        "Página web: " + websiteUrl + "\n" +
        "Mensaje: " + message;

    var file = new Blob([formData], { type: 'text/plain' });

    var a = document.createElement("a");
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = 'formulario.txt';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}