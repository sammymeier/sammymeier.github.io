const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');

volumeSlider.addEventListener('input', function() {
    volumeValue.textContent = volumeSlider.value;
});

volumeSlider.addEventListener('change', function() {
});

function update() {
    var volume = slider.value;
    sliderOutput.textContent = volume;
    
    var position = (100 - volume) / 10;
    slider.style.background = "linear-gradient(to top, #1abc9c " + position + "%, #ccc " + position + "%)";
    slider.style.setProperty("--slider-position", position + "%");
  }
