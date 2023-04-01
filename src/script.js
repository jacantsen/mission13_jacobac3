const playAudioButton = document.getElementById('play-audio');
const audioPlayer = document.getElementById('audio-player');

playAudioButton.addEventListener('click', () => {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
});
