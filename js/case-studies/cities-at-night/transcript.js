$("document").ready(function(){
    var theater = new TheaterJS({erase: false});
    theater
    .describe("Buzz Aldrin", { speed: .9, accuracy: 1, invincibility: 4 } , "#buzz")
    .describe("Neil Armstrong", .9, "#neil")
    .describe("log", .9, "#log")
    .describe("Michael Collins", .9, "#michael");

theater
    .on("say:start", function (eventName) {
        // this refer to the TheaterJS instance.
        var self    = this,

        // The current actor is referenced as this.current
        // Its voice is the third element passed to the describe method.
        // It could be of two types: a DOM element or a function.
        current = self.current.voice;

    // TheaterJS has some useful methods such as
    // addClass, hasClass, removeClass, ...
    // Note: the "saying" class adds the blinking caret.
    var say = document.getElementById(current.id + "-say");

    self.utils.removeClass(say, "silence");
    self.utils.removeClass(current, "silence");
    self.utils.addClass(say, "saying");
    self.utils.addClass(current, "saying");
    })
    .on("say:end", function (eventName) {
        var self    = this,
    current = self.current.voice;
    
    // When say or erase ends, remove the caret.
    var say = document.getElementById(current.id + "-say");
    if (say.id != 'log-say') {
        self.utils.removeClass(say, "saying");
        self.utils.removeClass(current, "saying");
        self.utils.addClass(say, "silence");
        $("#" + current.id).text("");
        self.utils.addClass(current, "silence");
    }
});


var spaces = "             ";

theater
.write("Buzz Aldrin: Alright, now, do we want black and white, color, 250 or 80?"+spaces)
.write("Buzz Aldrin: I've got all options over here.      ")
.write("Neil Armstrong: Oh, we'll probably want..." + spaces)
.write("Buzz Aldrin: Let me have a camera." + spaces)
.write("Neil Armstrong: How many cameras you got?" + spaces)
.write("Buzz Aldrin: How many cameras?" + spaces)
.write("Michael Collins: Well, only one camera, but I've got..." + spaces)
.write("Michael Collins: lenses." + spaces)
.write("log: Apollo 11. August 1969")
.write(function () { theater.play(); });

$("#know-more").off('click').on('click', function(){
    $(".scene").fadeOut("slow", function(){
        $(".after-transcript").fadeIn();
    });
    $("#know-more").hide();
});

});
