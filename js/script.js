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