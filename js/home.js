const rangeInputs = document.querySelectorAll('#vol-control[type="range"]')

const video = document.getElementById("lvck-bg");
const speaker = document.getElementById('speaker');
const player = document.getElementById('lvck-audio');
const issue = document.getElementById('vol-control-issue');
const buttons = document.getElementById('buttons');
const sliders = document.getElementById('sliders');
const title = document.getElementById('name');
const lvck_btn = document.getElementById('lvck-btn');

player.src = "../media/LVCK_audio_" + String(Math.floor(4 * Math.random()) + 1) + ".mp3";

player.addEventListener('ended', (event) => {
  player.src = "../media/LVCK_audio_" + String(Math.floor(4 * Math.random()) + 1) + ".mp3";
  player.play();
})

buttons.addEventListener('click', event => {
  video.style.animation = "fade-out 1s linear forwards";
  setInterval(function () {
    if (player.volume > 0.01) {
      player.volume -= 0.01;
    }
  }, 20);
  setTimeout(function () {
    sliders.style.animation = "fade-out 1s linear forwards";
  }, 500);
  setTimeout(function () {
    buttons.style.animation = "fade-out 1s linear forwards";
  }, 1000);
  setTimeout(function () {
    title.style.animation = "fade-out 1s linear forwards";
  }, 1500);
});

lvck_btn.addEventListener('click', event => {
  video.src = "../media/LVCK2.mp4";
});

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  }
  const min = target.min
  const max = target.max
  const val = target.value

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

document.getElementById('speaker').onclick = function () {
  const val = document.getElementById('vol-control').value;

  if (speaker.src.includes("mute")) {
    SetVolume(val);
    player.play();
  } else {
    speaker.src = "../media/speaker_mute.jpg";
    player.volume = 0;
  }
}

function SetVolume(val) {
  player.volume = val / 100;
  if (val >= 70) {
    speaker.src = "../media/speaker3.jpg";
  } else if (val >= 35) {
    speaker.src = "../media/speaker2.jpg";
  } else if (val > 0) {
    speaker.src = "../media/speaker1.jpg";
  } else {
    speaker.src = "../media/speaker0.jpg";
  }
}

setInterval(function () {
  issue.style.animationDuration = String(Math.random() * 0.5 + 0.2) + "s";
}, 500);

function delay(URL, transition_time) {
  setTimeout(function () {
    window.location = URL;
  }, transition_time);
}
