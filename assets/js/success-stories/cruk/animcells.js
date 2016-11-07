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
    Snap.load("/assets/img/success-stories/cruk/cells-ani.svg", function(f) {
        var cell1 = f.select("#cell1");
        var cell2 = f.select("#cell2");
        var cell3 = f.select("#cell3");
        var cell4 = f.select("#cell4");

        var bubble1= f.select("#bubble1");
        var bubble2= f.select("#bubble2");
        var bubble3= f.select("#bubble3");
        var bubble4= f.select("#bubble4");
        var bubble5= f.select("#bubble5");
        var bubble6= f.select("#bubble6");
        var bubble7= f.select("#bubble7");
        var bubble8= f.select("#bubble8");
        var bubble9= f.select("#bubble9");
        
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
        bubble4.attr({r: '0'});
        bubble5.attr({r: '0'});
        bubble6.attr({r: '0'});
        bubble7.attr({r: '0'});
        bubble8.attr({r: '0'});
        bubble9.attr({r: '0'});
        
        face1.attr({opacity: '0'});
        face2.attr({opacity: '0'});
        face3.attr({opacity: '0'});

        var time = 200;

        function animateCells() {
            cell4.animate({r: 30}, getRandomInt(200, 800) - 50, mina.easin)
            cell2.animate({r: 24}, getRandomInt(200, 800), mina.easin)
            cell3.animate({r: 17}, getRandomInt(200, 800), mina.easin, animateBubbles)

            face1.animate({opacity: 1}, getRandomInt(200, 800), mina.easin, function(){
                face2.animate({opacity: 1}, getRandomInt(200, 800), mina.easin, function(){
                    face3.animate({opacity: 1}, getRandomInt(200, 800), mina.easin, function(){
                        fill153.animate({opacity:1}, getRandomInt(200, 800), mina.easin)
                    })
                })
            })
        }

        function animateBubbles() {
            bubble1.animate({r: 74}, getRandomInt(200, 800), mina.easin, function(){
                bubble2.animate({r: 143}, getRandomInt(200, 800), mina.easin, function(){
                    bubble3.animate({r: 72}, getRandomInt(200, 800), mina.easin, function(){
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
                          })
                        })
                    })
        }

        function startAnim() {
            if (window.animVideo == false) {
                cell1.animate({r: 27}, getRandomInt(200, 800) + 100, mina.easin, animateCells)
             
            }
            window.animVideo = true;
        }

        //startAnim();
        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('startingpoint-waypoint'),
            offset: 200,
            handler: startAnim
        });

    });          
}
