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
    var reset = false;
}


function startVivus() {
        vivusProcess[0].play();
}

function startVivusVolunteers() {
        vivusProcess[0].play();
}

function resetVivus() {
    if (!reset) {
        vivusProcess[1].reset();
        reset = true;
    } 
}

function startVivusExperts() {
    vivusProcess[1].play();
}



if (lg) {
    var waypointProcess = new Waypoint({
        element: document.getElementById('process-waypoint'),
        offset: 61,
        handler: startVivus
    });
}
else {
    var waypointProcess = new Waypoint({
        element: document.getElementById('process-volunteers'),
        offset: 100,
        handler: startVivusVolunteers
    });
    var waypointReset= new Waypoint({
        element: document.getElementById('process-video'),
        offset: 50,
        handler: resetVivus
    });

    var waypointProcess2 = new Waypoint({
        element: document.getElementById('process-experts'),
        offset: 100,
        handler: startVivusExperts
    });

}

