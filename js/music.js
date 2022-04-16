const buttons = document.getElementById('buttons');
const clued_player = document.getElementById('clued-player');
const poly_player = document.getElementById('polychromatics-player');
const clued_song = document.getElementById('clued-song');
const poly_song = document.getElementById('poly-song');
let track = 0;
let items = document.querySelectorAll("#clued-list li input"), 
    tab = [], index;

for (let i = 0; i < items.length; i++) {
    tab.push(items[i].value);
}

buttons.addEventListener('click', event => {
    document.body.style.animation = "fade-out .5s linear forwards";
});

function delay(URL, transition_time) {
    setTimeout(function () {
        window.location = URL;
    }, transition_time);
}

function audio_select(name) {
    clued_player.title = name;
    clued_player.src = "../music/" + name + ".mp3";
    clued_song.textContent = "Now playing: " + name;
    clued_song.style.animation = "fade-in 1s linear forwards";
    clued_player.play();
    track = tab.indexOf(name);
};

function audio_select_poly(name) {
    poly_player.title = name;
    poly_player.src = "../music/" + name + ".mp3";
    poly_song.textContent = "Now playing: " + name;
    poly_song.style.animation = "fade-in 1s linear forwards";
    poly_player.play();
    track = tab.indexOf(name);
};

function audio_select_puppet(name) {
    clued_player.title = name;
    clued_player.src = "../music/" + name + ".mp3";
    clued_song.textContent = "Now playing: " + name;
    clued_song.style.animation = "fade-in 1s linear forwards";
    clued_player.play();
    track = tab.indexOf(name);
};

clued_player.addEventListener('play', event => {
    poly_player.pause();
})

poly_player.addEventListener('play', event => {
    clued_player.pause();
})

clued_player.addEventListener('ended', event => {
    if (track < 18 && true) { // replace true with next song method
        clued_player.src = "../music/" + tab[track+1] + ".mp3";
        clued_song.style.animation = "fade-out .5s"
        setTimeout(function () {
            clued_player.title = tab[track+1];
            clued_song.textContent = "Now playing: " + tab[track+1];
            clued_song.style.animation = "fade-in .5s linear forwards";
            clued_player.play();
            track += 1;
        }, 500);
    } else if (true) { // replace if condition with loop method
        clued_player.src = "../music/" + tab[0] + ".mp3";
        clued_song.style.animation = "fade-out .5s"
        setTimeout(function () {
            clued_player.title = tab[0];
            clued_song.textContent = "Now playing: " + tab[0];
            clued_song.style.animation = "fade-in .5s linear forwards";
            clued_player.play();
            track = 0;
        }, 500);
    }
});

poly_player.addEventListener('ended', event => {
    if (track < 18 && true) { // replace true with next song method
        clued_player.src = "../music/" + tab[track+1] + ".mp3";
        clued_song.style.animation = "fade-out .5s"
        setTimeout(function () {
            clued_player.title = tab[track+1];
            clued_song.textContent = "Now playing: " + tab[track+1];
            clued_song.style.animation = "fade-in .5s linear forwards";
            clued_player.play();
            track += 1;
        }, 500);
    } else if (true) { // replace if condition with loop method
        clued_player.src = "../music/" + tab[0] + ".mp3";
        clued_song.style.animation = "fade-out .5s"
        setTimeout(function () {
            clued_player.title = tab[0];
            clued_song.textContent = "Now playing: " + tab[0];
            clued_song.style.animation = "fade-in .5s linear forwards";
            clued_player.play();
            track = 0;
        }, 500);
    }
});