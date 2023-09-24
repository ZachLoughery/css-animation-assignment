// A simple javascript button transition to trigger the rave and the music
let introBtn = document.getElementById('introBtn');
let introSection = document.getElementById('intro');
let raveSection = document.getElementById('rave');
let music = document.getElementById('music');
music.volume = 0.2;

introBtn.addEventListener('click', function() {
    introSection.classList.remove('visible');
    introSection.classList.add('hidden');
    document.body.style.animation = 'rainbowBG 0.7s ease-in-out infinite';
    raveSection.classList.remove('hidden');
    raveSection.classList.add('visible');
    music.play();
});