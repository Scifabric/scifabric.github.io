$(".closeform").off('click').on('click', function(){
    $(".contactform").fadeOut();
});

$(".btn-contactform-close").off('click').on('click', function(){
    $(".contactform").fadeOut("fast", function(){
        $(".step1").removeClass("animated flipOutY");
        $(".step2").removeClass("animated flipOutY");
        $(".step1").removeClass("animated flipInY");
        $(".step2").removeClass("animated flipInY");
        $(".step2").hide();
        $(".step1").css("display", "flex");
    });
});

function showContactForm() {
    $(".contactform").css("display", "flex");
    $(".contactform").fadeIn();
}

function contactForm() {
    console.log("Testing form");
    $.ajax({
        url: "https://formchimp.scifabric.com/register",
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function(data) {
        var form = $("#contactform").serialize();
        form += "&subject=[New possible Client]";

        var csrftoken = data['csrf_token'];

        var xhr = $.ajax({
          type: "POST",
          url: "https://formchimp.scifabric.com/register",
          data: form,
          dataType: "json",
          crossDomain: true,
          headers: {'X-CSRFToken': data['csrf_token']},
          xhrFields: { withCredentials: true }
        }).done(function(data){
            if (data['msg'] != undefined) {
                console.log("New user done!")
                $(".step1").addClass("animated flipOutY");
                $(".step1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 
                    $(".step1").hide(); 
                    $(".step2").css("display", "flex").addClass("animated flipInY")});

            }
            else {
                $("div").removeClass("has-error");
                $(".help-block").remove(".help-block");
                    $.each(data, function(key, value){
                        var help = $("<span/>");
                        help.addClass("help-block");
                        help.text(value[0]);
                        $("#" + key).parent().addClass("has-error");
                        $("#" + key).parent().append(help);
                    });
            }
        });

    });
}
