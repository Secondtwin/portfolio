// ------------------SLIDER---------------------------
var slides = document.querySelectorAll('#slides .slide'),
    currentSlide = 0,
    next = document.getElementById('next'),
    previous = document.getElementById('previous');

function nextSlide() {
    goToSlide(currentSlide + 1);
};

function previousSlide() {
    goToSlide(currentSlide - 1);
};

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
};

next.onclick = function() {
    nextSlide();
};

previous.onclick = function() {
    previousSlide();
};

// ------------------RESET FORM VALUES---------------------------
function validateForm() {
    var submitBtn = document.getElementById('myBut'),
        name = document.forms["contact-me-form"]["name"].value,
        email = document.forms["contact-me-form"]["_replyto"].value,
        message = document.forms["contact-me-form"]["text"].value;

    if (name !== "" && email !== "" && message !== "") {
        submitBtn.addEventListener('click', function (evt) {
            evt.preventDefault();
            window.location.assign('#menu');
            document.getElementById('contact-me-form').reset();
        });
    }
    return false;
}
