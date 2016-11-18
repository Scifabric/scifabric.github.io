function animAccuracy(){
    window.animVideo = false;
    var s = Snap(".accuracybubble");

    var vivusChart = new Vivus('chart', {duration: 100});

    vivusChart.stop();

    Snap.load("/assets/img/success-stories/cruk/accuracy.svg", function(f) {
        var cell1 = f.select("#accuracybubble");
        var ninety = f.select("#ninety");
        var accuracy = f.select("#accuracy");

        cell1.attr({r: '0'});

        ninety.attr({opacity: '0'});
        accuracy.attr({opacity: '0'});

        var time = 500;

        function showText() {
            ninety.animate({opacity: 1}, 200, mina.easin);
            accuracy.animate({opacity: 1}, 200, mina.easin);
        }

        function startAnim() {
                vivusChart.play();
                cell1.animate({r: 90}, time, mina.easin, showText);
        }

        //startAnim();
        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('results-waypoint'),
            offset: 61,
            handler: startAnim
        });

    });          
}
