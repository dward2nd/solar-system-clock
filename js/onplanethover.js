function stopRotating(pl) {
    for(var j=0; j<8; j++) {
        orbitEl[j].style.animationPlayState = 'paused';
        circularRotator[j].style.animationPlayState = 'paused';
    }
}

function keepRotating(pl) {
    for(var j=0; j<8; j++) {
        orbitEl[j].style.animationPlayState = 'running';
        circularRotator[j].style.animationPlayState = 'running';
    }
}

for(var i=0; i<8; i++) {
    planetEl[i].addEventListener('mouseover', stopRotating);
    planetEl[i].addEventListener('mouseleave', keepRotating);
}

sun.addEventListener('mouseover', stopRotating);
sun.addEventListener('mouseleave', keepRotating);
