// Static variables
const fadeout_time = .25; // In seconds.

// Replace banner content.
fetch('../html/banner.html')
.then(response => response.text())
.then(data => {
    // Place banner into content.
    document.getElementById('banner-placeholder').innerHTML = data;

    // Set up buttons.
    const buttons = document.getElementById('buttons');
    if (buttons != null)
    {
        buttons.addEventListener('click', event => {
            document.body.style.animation = `fade-out ${fadeout_time}s linear forwards`;
        });
    }
});

function delay(URL) {
    setTimeout(function () {
        window.location = URL;
    }, fadeout_time * 1000); // Converting to milliseconds.
}