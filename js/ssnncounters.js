var currentURL = window.location.href;

if (currentURL.indexOf('localhost') > -1) {
    console.log("As you're in localhost we use our Crowdcrafting site.");
    currentURL = encodeURIComponent('http://crowdcrafting.org');
}

var twitterEndpoint = 'https://cdn.api.twitter.com/1/urls/count.json?url=' + currentURL + '&callback=?';
var facebookEndpoint = 'https://graph.facebook.com/' + currentURL;
var linkedinEndpoint = 'https://www.linkedin.com/countserv/count/share?url=' + currentURL + "&format=jsonp&callback=?";


$.when($.getJSON( twitterEndpoint, "jsonp"),
       $.getJSON( linkedinEndpoint, "jsonp"),
       $.getJSON( facebookEndpoint, "jsonp")
        ).done(function(t,l,f){
            console.log("Twitter:" + t[0].count);
            $("#twitterCount").text(t[0].count);
            console.log("Linkedin: " + l[0].count);
            $("#linkedinCount").text(t[0].count);
            console.log("Facebook: " + f[0].shares);
            $("#facebookCount").text(t[0].shares);
            
        });
