var orbitEl = [
    document.querySelector(".orbit#mercury"),
    document.querySelector(".orbit#venus"),
    document.querySelector(".orbit#earth"),
    document.querySelector(".orbit#mars"),
    document.querySelector(".orbit#jupiter"),
    document.querySelector(".orbit#saturn"),
    document.querySelector(".orbit#uranus"),
    document.querySelector(".orbit#neptune") /* ,
    document.querySelector(".orbit#sun") */
];

var planetEl = [
    document.querySelector(".planet#mercury"),
    document.querySelector(".planet#venus"),
    document.querySelector(".planet#earth"),
    document.querySelector(".planet#mars"),
    document.querySelector(".planet#jupiter"),
    document.querySelector(".planet#saturn"),
    document.querySelector(".planet#uranus"),
    document.querySelector(".planet#neptune")
];

var circularRotator = [
    document.querySelector(".circularRotator#mercury"),
    document.querySelector(".circularRotator#venus"),
    document.querySelector(".circularRotator#earth"),
    document.querySelector(".circularRotator#mars"),
    document.querySelector(".circularRotator#jupiter"),
    document.querySelector(".circularRotator#saturn"),
    document.querySelector(".circularRotator#uranus"),
    document.querySelector(".circularRotator#neptune")
];

var sun = document.getElementById('sun');

var loadpage = document.getElementById('loadpage');
var controlpanel = document.getElementById('control-panel');
var solarSystem = document.getElementById('solar-system');

window.addEventListener("load", function() {
    setTimeout(function() {
        loadpage.style.opacity = '0';
        loadpage.style.zIndex = '-1';
        // loadpage.style.display = 'none';
        solarSystem.style.opacity = '1';
        controlpanel.style.opacity = '1';
        
    }, 1000);
    setTimeout(function() {
        loadpage.style.display = 'none';
    }, 2000);
    
    for(var i=0; i<8; i++) {
        // set orbit
        orbitEl[i].style.width = planet[i].shownOrbit + 'vmin';
        orbitEl[i].style.height = planet[i].shownOrbit + 'vmin';
        orbitEl[i].style.paddingLeft = (planet[i].shownOrbit / 2) + 'vmin';
        orbitEl[i].style.marginLeft = '-' + (planet[i].shownOrbit / 2) + 'vmin';
        orbitEl[i].style.marginTop = '-' + (planet[i].shownOrbit / 2) + 'vmin';

        // set planet
        planetEl[i].style.width = planet[i].shownLength + 'vmin';
        planetEl[i].style.height = planet[i].shownLength + 'vmin';

        // set circular rotator
        
        circularRotator[i].style.width = (planet[i].shownLength + 1) + 'vmin';
        circularRotator[i].style.height = (planet[i].shownLength + 1) + 'vmin';
        
        circularRotator[i].style.marginLeft = '-' + (planet[i].shownLength / 2 + 0.5) + 'vmin';
        circularRotator[i].style.marginTop = '-' + (planet[i].shownLength / 2 + 0.5) + 'vmin';
    }
});