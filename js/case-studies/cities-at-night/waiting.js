 window._waiting = function() {
     console.log("Hola");
 window.transcriptStarted = false;
 console.log("Loading ost...");
 window.ost();
 addEventListener('ostStarted', function (e) { 
     $("body").addClass('loaded');
     console.log("Sounds started...");
     window.setTimeout(window.transcript, 1200);
 }, false);
}
