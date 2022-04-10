const rangeInputs = document.querySelectorAll('#vol-control[type="range"]')

const video = document.getElementById("lvck-bg");
const speaker = document.getElementById('speaker');
const player = document.getElementById('youtube-audio');
const issue = document.getElementById('vol-control-issue');
const buttons = document.getElementById('buttons');
const sliders = document.getElementById('sliders');
const title = document.getElementById('name');
const lvck_btn = document.getElementById('lvck-btn');

buttons.addEventListener('click', event => {
  video.style.animation = "fade-out 1s linear forwards";
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
  video.src = "Website/media/LVCK2.mp4";
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
  } else {
    speaker.src = "Website/media/speaker_mute.jpg";
    player.volume = 0;
  }
}

function SetVolume(val) {
  player.volume = val / 100;
  if (val >= 70) {
    speaker.src = "Website/media/speaker3.jpg";
  } else if (val >= 35) {
    speaker.src = "Website/media/speaker2.jpg";
  } else if (val > 0) {
    speaker.src = "Website/media/speaker1.jpg";
  } else {
    speaker.src = "Website/media/speaker0.jpg";
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

/* Taken and modified from "https://cdn.rawgit.com/labnol/files/master/yt.js" */
function onYouTubeIframeAPIReady() {
  var e = document.getElementById("youtube-audio"), t = document.createElement("img"); t.setAttribute("id", "youtube-icon"), t.style.cssText = "cursor:pointer;cursor:hand", e.appendChild(t);

  var a = document.createElement("div");
  a.setAttribute("id", "youtube-player"), e.appendChild(a);

  e.onclick = function () {
    r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo()) : (r.playVideo())
  }

  var r = new YT.Player("youtube-player", {
    height: "0", width: "0", videoId: e.dataset.video, playerVars: {
      autoplay: e.dataset.autoplay, loop: e.dataset.loop
    }, events: {
      onReady: function (e) {
        r.setPlaybackQuality("small")
      }, onStateChange: function (e) {
        e.data === YT.PlayerState.ENDED && o(!1)
      }
    }
  })
}