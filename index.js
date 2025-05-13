const playPauseBtn = document.querySelector('.playpause-track');
const prevBtn = document.querySelector('.prev-track');
const nextBtn = document.querySelector('.next-track');
const seekSlider = document.querySelector('.seek-slider');
const volumeSlider = document.querySelector('.volume-slider');

let isPlaying = false;
let currentTrack = new Audio('path/to/your/track.mp3');

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        currentTrack.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        currentTrack.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

prevBtn.addEventListener('click', () => {
    // Logic to play the previous track
});

nextBtn.addEventListener('click', () => {
    // Logic to play the next track
});

seekSlider.addEventListener('input', () => {
    currentTrack.currentTime = (seekSlider.value / 100) * currentTrack.duration;
});

volumeSlider.addEventListener('input', () => {
    currentTrack.volume = volumeSlider.value / 100;
});

currentTrack.addEventListener('timeupdate', () => {
    seekSlider.value = (currentTrack.currentTime / currentTrack.duration) * 100;
});
