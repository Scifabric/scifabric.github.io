/**
 * Get a random floating point number between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {float} a random floating point number
 */
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function animCells(){
    window.animVideo = false;
    var s = Snap(".cells-frame");
    var svgurl = "/assets/img/success-stories/cruk/cells-ani.svg";
    var lg = true;
    if (window.matchMedia("(max-width: 420px)").matches) {
        svgurl = "/assets/img/success-stories/cruk/cells-sm.svg";
        lg = false;
    }
    console.log(svgurl);
    Snap.load(svgurl, function(f) {
        var cell1 = f.select("#cell1");
        var cell2 = f.select("#cell2");
        var cell3 = f.select("#cell3");
        var cell4 = f.select("#cell4");

        var bubble1= f.select("#bubble1");
        var bubble2= f.select("#bubble2");
        var bubble3= f.select("#bubble3");
        if (lg) {
            var bubble4= f.select("#bubble4");
            var bubble5= f.select("#bubble5");
            var bubble6= f.select("#bubble6");
            var bubble7= f.select("#bubble7");
            var bubble8= f.select("#bubble8");
            var bubble9= f.select("#bubble9");
        }
        
        var face1= f.select("#face1");
        var face2= f.select("#face2");
        var face3= f.select("#face3");
        
        var fill153= f.select("#Fill-153");


        fill153.attr({opacity: '0'});

        cell1.attr({r: '0'});
        cell2.attr({r: '0'});
        cell3.attr({r: '0'});
        cell4.attr({r: '0'});
        bubble1.attr({r: '0'});
        bubble2.attr({r: '0'});
        bubble3.attr({r: '0'});
        if (lg) {
            bubble4.attr({r: '0'});
            bubble5.attr({r: '0'});
            bubble6.attr({r: '0'});
            bubble7.attr({r: '0'});
            bubble8.attr({r: '0'});
            bubble9.attr({r: '0'});
        }
        
        face1.attr({opacity: '0'});
        face2.attr({opacity: '0'});
        face3.attr({opacity: '0'});

        var time = 200;

        function animateCells() {
            var r = 39/2;
            if (lg) {
                r = 30;
            }
            cell4.animate({r: r}, getRandomInt(200, 800) - 50, mina.easin)
            var r = 45/2;
            if (lg) {
                r = 24;
            }
            cell2.animate({r: r}, getRandomInt(200, 800), mina.easin)
            var r = 39/2;
            if (lg) {
                r = 17;
            }
            cell3.animate({r: r}, getRandomInt(200, 800), mina.easin, animateBubbles)

            face1.animate({opacity: 1}, getRandomInt(200, 800), mina.easin, function(){
                face2.animate({opacity: 1}, getRandomInt(200, 800), mina.easin, function(){
                    face3.animate({opacity: 1}, getRandomInt(200, 800), mina.easin, function(){
                        fill153.animate({opacity:1}, getRandomInt(200, 800), mina.easin)
                    })
                })
            })
        }

        function animateBubbles() {
            var r = 29/2;
            if (lg) { r = 74;}
            bubble1.animate({r: r}, getRandomInt(200, 800), mina.easin, function(){
                var r = 34/2;
                if (lg) { r = 143;}
                bubble2.animate({r: r}, getRandomInt(200, 800), mina.easin, function(){
                    var r = 34/2;
                    if (lg) { r = 72;}
                    bubble3.animate({r: r}, getRandomInt(200, 800), mina.easin, function(){
                        if (lg) {
                            bubble4.animate({r: 36}, getRandomInt(200, 800), mina.easin, function(){
                                bubble5.animate({r: 78}, getRandomInt(200, 800), mina.easin, function(){
                                    bubble6.animate({r: 76}, getRandomInt(200, 800), mina.easin, function(){
                                        bubble7.animate({r: 115}, getRandomInt(200, 800), mina.easin, function(){
                                            bubble8.animate({r: 123}, getRandomInt(200, 800), mina.easin, function(){
                                                bubble9.animate({r: 41}, getRandomInt(200, 800), mina.easin, function(){
                                                     })
                                                  })
                                              })
                                          })
                                      })
                                  })
                        }
                          })
                        })
                    })
        }

        function startAnim() {
            console.log("animation empieza")
            if (window.animVideo == false) {
                var r = 36/2;
                if (lg) { r = 27}
                cell1.animate({r: r}, getRandomInt(200, 800) + 100, mina.easin, animateCells)
             
            }
            window.animVideo = true;
        }

        //startAnim();
        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('startingpoint-waypoint'),
            offset: 61,
            handler: startAnim
        });

    });          
}
