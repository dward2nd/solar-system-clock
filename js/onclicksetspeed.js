var setSpeedBtn = document.getElementById('setSpeed');
var speedTxtBox = document.getElementById('speed');

setSpeedBtn.addEventListener('click', function() {
    var multipier = parseInt(speedTxtBox.value);
    for(i=0; i<8; i++) {
        orbitEl[i].style.animationPlayState = 'paused';
        orbitEl[i].style.animationDuration = (planet[i].orbitPeriod / multipier) + 's';
        orbitEl[i].style.animationPlayState = 'running';
    }
});