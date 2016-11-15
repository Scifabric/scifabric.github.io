$("#close").off('click').on('click', function(){
    $(".person").fadeOut();
});

function showFirstMessage() {
    $(".first").show();
    $(".first").css("display", "flex");
    $(".first").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', showSecondMessage);
}

function showSecondMessage() {
    $(".second").show();
    $(".second").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', showThirdMessage);
}

function showThirdMessage() {
    $(".third").show();
}



function showNick() {
    $(".person").animate({opacity: 1}, 200, function(){
        $(".avatar").show();
        $(".avatar").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', showFirstMessage);
    });
}

function hideNick() {
    $(".person").fadeOut();
    $("#nick").css("visibility", "visible");
}

var showpersonWaypoint = new Waypoint({
    element: document.getElementById('startingpoint-waypoint'),
    offset: 0,
    handler: showNick
});

var hidepersonWaypoint = new Waypoint({
    element: document.getElementById('team-waypoint'),
    offset: 500,
    handler: hideNick
});

