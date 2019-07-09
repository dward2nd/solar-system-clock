// var setSpeedBtn = document.getElementById('setSpeed');
var speedTxtBox = document.getElementById('speed');

speedTxtBox.addEventListener('input', function() {
    var multipier = parseInt(speedTxtBox.value);

    for(i=0; i<8; i++) {
        if(multipier == 0) {
            orbitEl[i].style.animationPlayState = 'paused';
        } else {
            orbitEl[i].style.animationDuration = (planet[i].orbitPeriod / multipier) + 's';
            orbitEl[i].style.animationPlayState = 'running';
        }
    }
});