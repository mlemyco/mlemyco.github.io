// parallax between images/text

let introBg = document.getElementById('intro-bg');
let progBg = document.getElementById('programming-bg');
let artBg = document.getElementById('art-bg');
let contactBg = document.getElementById('contact-bg');

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    introBg.style.top = 200 + (value * 0.3) + 'px';
    progBg.style.top = (value * 0.3) + 'px';
    artBg.style.top = (value * 0.3) + 'px';
    contactBg.style.top = (value * 0.3) + 'px';
})