var lg = true;
if (window.matchMedia("(max-width: 420px)").matches) {
    lg = false;
}

var vivusProcess = [];

if (lg) {
    var tmp = new Vivus('my-svg', {duration: 200});
    vivusProcess.push(tmp)
    vivusProcess[0].stop();
}
else {
    var tmp = new Vivus('process-volunteers', {duration: 200});
    vivusProcess.push(tmp)
    var tmp = new Vivus('process-experts', {duration: 200});
    vivusProcess.push(tmp)
    vivusProcess[0].stop();
    vivusProcess[1].stop();
}


function startVivus() {
    for(var i=0;i<vivusProcess.length;i++) {
        vivusProcess[i].play();
    }
}
var waypointProcess = new Waypoint({
    element: document.getElementById('process-waypoint'),
    offset: 100,
    handler: startVivus
});

