const buttons = document.getElementById('buttons');
const lvck_buttons = document.getElementById('')
let slideIndex = 1;

for (let i = 1; i < 4; i++) {
    showSlides(slideIndex, String(i));
}

buttons.addEventListener('click', event => {
    document.body.style.animation = "fade-out .5s linear forwards";
});

function delay(URL, transition_time) {
    setTimeout(function () {
        window.location = URL;
    }, transition_time);
}

function plusSlides(n, m) {
  showSlides(slideIndex += n, m);
}

function currentSlide(n) {
  showSlides(slideIndex = n, m);
}

function showSlides(n, m) {
  let i;
  let slides = document.querySelectorAll('[id=Slides-' + m)
  let dots = document.querySelectorAll('[id=dot-' + m)
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

