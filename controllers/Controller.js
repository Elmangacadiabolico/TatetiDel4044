window.addEventListener("load", (event) => {
    const audio = document.getElementById("backgroundAudio");
  
    audio.volume = 1.0;
    audio.play("/musicadefondo.wav");
    audio.volume = volumeSlider.value;
});


