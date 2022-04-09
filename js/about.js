const buttons = document.getElementById('buttons');

buttons.addEventListener('click', event => {
    document.body.style.animation = "fade-out 1s linear forwards";
});

function delay(URL, transition_time) {
    setTimeout(function () {
        window.location = URL;
    }, transition_time);
}