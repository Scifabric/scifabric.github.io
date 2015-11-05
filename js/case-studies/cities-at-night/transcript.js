window.transcript = function(start){

    window.transcriptStarted = true;
    var theater = new theaterJS({erase: false});
    theater
    .addActor("Buzz Aldrin", { speed: .9, accuracy: 1, invincibility: 4 } , "#buzz")
    .addActor("Neil Armstrong", .9, "#neil")
    .addActor("log", .9, "#log")
    .addActor("Michael Collins", .9, "#michael");

    var scenes = [
"Buzz Aldrin: Alright, now, do we want black and white, color, 250 or 80?", 
"Buzz Aldrin: I've got all options over here.",
"Neil Armstrong: Oh, we'll probably want...",
"Neil Armstrong: How many cameras you got?",
"Buzz Aldrin: Let me have a camera.",
"Buzz Aldrin: How many cameras?",
"Michael Collins: Well, only one camera, but I've got...",
"Michael Collins: lenses.",
"log: August 1969"
        ];

theater
    .on("type:start", function (eventName) {
        // this refer to the TheaterJS instance.
        var self    = this,

        // The current actor is referenced as this.current
        // Its voice is the third element passed to the describe method.
        // It could be of two types: a DOM element or a function.
        current = theater.getCurrentActor();

    // TheaterJS has some useful methods such as
    // addClass, hasClass, removeClass, ...
    // Note: the "saying" class adds the blinking caret.
    //var say = document.getElementById(current.$element.id + "-say");

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
    .on("type:end", function (eventName) {
        var self    = this;


    var p = $("<p/>");
    p.text("Next");
    p.css('font-style', 'italic');
    p.off('click').on('click', function(self){
        current = theater.getCurrentActor();
        // When say or erase ends, remove the caret.
        var say = document.getElementById(current.$element.id + "-say");
        if (say != 'log-say') {
            //self.utils.removeClass(say, "saying");
            $("#" + current.$element.id + "-say").removeClass("saying");
            //self.utils.removeClass(current, "saying");
            theater.getCurrentActor().$element.classList.remove('saying');
            //self.utils.addClass(say, "silence");
            $("#" + current.$element.id + "-say").addClass("silence");
            $("#" + current.$element.id).text("");
            //self.utils.addClass(current, "silence");
            theater.getCurrentActor().$element.classList.add('silence');
        }
        else {
            $("#log-say").fadeOut();
            $("#know-more").fadeOut();
            $("#jumbotron").removeClass('jumbotron-no-world');
            $("#jumbotron").addClass('jumbotron');
            $("#jumbotron").css("opacity", "1");
            $(".scene").fadeOut("slow", function(){
                $(".after-transcript").fadeIn();
            });
            $("#know-more").hide();

        }

       theater.addScene(scenes.shift());
       theater.play();
    });
    $(".controls").html("").append(p);
    theater.stop();
    
});


var spaces = "             ";

theater
.addScene(scenes.shift());
theater.play();
//.write("Buzz Aldrin: I've got all options over here.      ")
//.write("Neil Armstrong: Oh, we'll probably want..." + spaces)
//.write("Neil Armstrong: How many cameras you got?" + spaces)
//.write("Buzz Aldrin: Let me have a camera." + spaces)
//.write("Buzz Aldrin: How many cameras?" + spaces)
//.write("Michael Collins: Well, only one camera, but I've got..." + spaces)
//.write("Michael Collins: lenses." + spaces)
//.write("log: August 1969" + spaces);
//.addScene(function () { theater.play(); });

$("#know-more").off('click').on('click', function(){
    $(".scene").fadeOut("slow", function(){
        $(".after-transcript").fadeIn();
        $("#jumbotron").removeClass('jumbotron-no-world');
        $("#jumbotron").addClass('jumbotron');
        $("#jumbotron").css("opacity", "1");

    });
    $("#know-more").hide();
});

}
