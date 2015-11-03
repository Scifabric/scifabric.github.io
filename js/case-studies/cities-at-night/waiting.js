 window._waiting = function() {
 window.transcriptStarted = false;
 window.ost();
 addEventListener('ostStarted', function (e) { 
     $("body").addClass('loaded');
     window.setTimeout(window.transcript, 1200);
 }, false);
}
