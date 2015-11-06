window.transcript = function(start){



    window.transcriptStarted = true;
    var theater = new theaterJS({erase: false});
    theater
    .addActor("Buzz Aldrin", { speed: .9, accuracy: 1, invincibility: 4 } , "#buzz")
    .addActor("Buzz Aldrin2", { speed: .9, accuracy: 1, invincibility: 4 } , "#buzz2")
    .addActor("Buzz Aldrin3", { speed: .9, accuracy: 1, invincibility: 4 } , "#buzz3")
    .addActor("Neil Armstrong", .9, "#neil")
    .addActor("Neil Armstrong2", .9, "#neil2")
    .addActor("log", .9, "#log")
    .addActor("Michael Collins", .9, "#michael");

    var scenes = [
"Buzz Aldrin: Alright, now, do we want black and white, color, 250 or 80?", 
"Buzz Aldrin2: I've got all options over here.",
"Neil Armstrong: Oh, we'll probably want...",
"Neil Armstrong2: How many cameras you got?",
"Buzz Aldrin3: Let me have a camera.",
"Buzz Aldrin3: How many cameras?",
"Michael Collins: Well, only one camera, but I've got...",
"Michael Collins: lenses.",
"log: August 1969"
        ];

theater
    .on("type:start", function (eventName) {

        current = theater.getCurrentActor();

    $("#" + current.$element.id + "-say").removeClass("silence");
    //say.className = say.className + " silence";
    //self.utils.removeClass(say, "silence");
    theater.getCurrentActor().$element.classList.remove('silence');
    //self.utils.removeClass(current, "silence");
    $("#" + current.$element.id + "-say").addClass("saying");
    //self.utils.addClass(say, "saying");
    theater.getCurrentActor().$element.classList.add('saying');
    //self.utils.addClass(current, "saying");
    })
    .on("type:end", function (event) {
        current = theater.getCurrentActor();
        // When say or erase ends, remove the caret.
        if (current.$element.id != 'log') {
            $("#next").removeClass("fadeOut");
            $("#next").addClass("fadeIn");
            $("#next").fadeIn();
            $(".controls").removeClass("silence");
        }
        var say = document.getElementById(current.$element.id + "-say");
        if (theater.getCurrentActor().$element.id === 'log') {
            $("#next").fadeOut();
            setInterval(function(){
                $("#next").hide();
                $("#log-say").fadeOut("slow");
                $("#know-more").fadeOut("slow");
                $("#jumbotron").removeClass('jumbotron-no-world');
                $("#jumbotron").addClass('jumbotron');
                $("#jumbotron").css("opacity", "1");
                $(".scene").fadeOut("slow", function(){
                    $(".after-transcript").fadeIn();
                });
                $("#know-more").hide();
            }, 1500);
        }
});


var spaces = "             ";

theater.addScene(scenes.shift());
theater.play();

$("#know-more").off('click').on('click', function(){
    $(".scene").fadeOut("slow", function(){
        $(".after-transcript").fadeIn();
        $("#jumbotron").removeClass('jumbotron-no-world');
        $("#jumbotron").addClass('jumbotron');
        $("#jumbotron").css("opacity", "1");

    });
    $("#know-more").hide();
});


function cleanScenes(){
    $(".scene").children().removeClass("saying");
    $(".scene").children().addClass("silence");
    $(".controls").removeClass("silence");
    $("#next").addClass("fadeOut");
}

$("#next").off('click').on('click', function(event){
   event.preventDefault();
   event.stopPropagation();
   if (theater.status != 'playing') {
         var myevent = new Event('btnClicked');
         cleanScenes();
         theater.addScene(scenes.shift());
         theater.play();
         var foo = dispatchEvent(myevent);
   }
   });
}

var listener = addEventListener('btnClicked', function (e) { 
    $("#next").hide();
}, false);
