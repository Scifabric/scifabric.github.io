var lg = true;
var pvideo = $("<video/>");
pvideo.attr("playsinline", "1");
pvideo.attr("autoplay", "1");
pvideo.attr("muted", "1");
pvideo.attr("loop", "1");
var source = $("<source/>");
source.attr("src", "//cdn.scifabric.com/assets/img/success-stories/cruk/process.mp4");
source.attr("type", "video/mp4");
pvideo.append(source);

if (window.matchMedia("(max-width: 420px)").matches) {
    lg = false;
}

var vivusProcess = [];

if (lg) {
    var tmp = new Vivus('my-svg', {duration: 200});
    vivusProcess.push(tmp)
    vivusProcess[0].stop();
    $(".contributors").append(pvideo);
}
else {
    var tmp = new Vivus('process-volunteers', {duration: 50});
    vivusProcess.push(tmp)
    var tmp = new Vivus('process-experts', {duration: 50});
    vivusProcess.push(tmp)
    vivusProcess[0].stop();
    vivusProcess[1].stop();
    var reset = false;
    $("#process-video").parent().append(pvideo);
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
        offset: 50,
        handler: startVivusVolunteers
    });
    var waypointReset= new Waypoint({
        element: document.getElementById('process-video'),
        offset: 50,
        handler: resetVivus
    });

    var waypointProcess2 = new Waypoint({
        element: document.getElementById('process-experts'),
        offset: 50,
        handler: startVivusExperts
    });

}

