var vivusProcess = new Vivus('my-svg', {duration: 200});

vivusProcess.stop();

function startVivus() {
    vivusProcess.play();
}
var waypointProcess = new Waypoint({
    element: document.getElementById('process-waypoint'),
    offset: 200,
    handler: startVivus
});

