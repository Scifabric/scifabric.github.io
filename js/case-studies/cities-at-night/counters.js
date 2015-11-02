jQuery({someValue: 29900}).animate({someValue: 30000}, {
    duration: 1500,
    easing:'swing', // can be anything
    step: function() { // called on every step
    // Update the element's text with rounded-up value:
       $('#30k').text(Math.ceil(this.someValue).toLocaleString());
       }
});

jQuery({someValue: 144000}).animate({someValue: 145000}, {
    duration: 3000,
    easing:'swing', // can be anything
    step: function() { // called on every step
    // Update the element's text with rounded-up value:
       $('#145k').text(Math.ceil(this.someValue).toLocaleString());
       }
});
