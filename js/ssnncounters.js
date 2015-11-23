var currentURL = encodeURIComponent(window.location.href);

if (currentURL.indexOf('localhost') > -1) {
    console.log("As you're in localhost we use our Crowdcrafting site.");
    currentURL = encodeURIComponent('http://scifabric.com/success-stories/citiesatnight/');
}



var facebookEndpoint = 'https://graph.facebook.com/' + currentURL;
var linkedinEndpoint = 'https://www.linkedin.com/countserv/count/share?url=' + currentURL + "&format=jsonp&callback=?";

var twitter_counter = 0;
var facebook_counter = 0;
var linkedin_counter = 0;


$.when(
       $.getJSON( linkedinEndpoint, "jsonp"),
       $.getJSON( facebookEndpoint, "jsonp")
        ).done(function(l,f){
            var event = new Event('defaultURLdone');

            console.log("Linkedin: " + l[0].count);
            linkedin_counter += l[0].count;

            console.log("Facebook: " + f[0].shares);
            facebook_counter += f[0].shares;
            var elem = document.getElementById('twitterCount');
            elem.dispatchEvent(event);
        });


if (window.bitly_link) {
    currentURL = window.bitly_link;
    console.log(window.bitly_link);
    var facebookEndpoint = 'https://graph.facebook.com/' + currentURL;
    var linkedinEndpoint = 'https://www.linkedin.com/countserv/count/share?url=' + currentURL + "&format=jsonp&callback=?";
    
    
    $.when(
           $.getJSON( linkedinEndpoint, "jsonp"),
           $.getJSON( facebookEndpoint, "jsonp")
            ).done(function(l,f){
                var event = new Event('bitlyURLdone');
    
                console.log("Linkedin: " + l[0].count);
                linkedin_counter += l[0].count;
    
                console.log("Facebook: " + f[0].shares);
                // We don't update because Facebook follows the link
                facebook_counter = f[0].shares;
                var elem = document.getElementById('facebookCount');
                elem.dispatchEvent(event);
            });
}


function update_counters(facebook, linkedin) {
    $("#twitterCount").html('<i class="fa fa-twitter-square"></i>Twitter ');

    $("#facebookCount").html('<i class="fa fa-facebook-square"></i>Facebook ' + facebook_counter);

    $("#linkedinCount").html('<i class="fa fa-linkedin-square"></i>LinkedIn ' + linkedin_counter);

}

var elem = document.getElementById('twitterCount');
elem.addEventListener('defaultURLdone', function(e){
    update_counters(facebook_counter, linkedin_counter);
}, false);

var elem_two = document.getElementById('facebookCount');

elem_two.addEventListener('bitlyURLdone', function(e){
    update_counters(facebook_counter, linkedin_counter);
}, false);
