/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "logo": {
        "strokepath": [
			{
                "path": "M 269.085,76.55 L 114.53,165.652   114.53,343.819 269.085,432.918 423.634,343.819 423.634,165.652 z",
                "duration": 1300,
				"reverse": true
            },
            {
                "path": "M381.454,13.142l-44.156,25.391v50.91  l44.144,25.382l44.232-25.382v-50.91L381.454,13.142z",
                "duration": 700
            },
            {
                "path": "M 336.302,292.26 L 292.967,267.102   336.061,241.538 379.297,267.163 379.297,318.065 379.296,318.065 380.352,318.043 269.682,381.572 158.87,318.062 158.87,292.561   181.71,279.867 270.478,330.696 379.297,267.163 M 203.893,216.05 L 248.808,241.816   203.183,267.193 158.867,241.475 158.867,241.475 158.867,190.953 159.823,190.988 269.68,127.457 379.295,190.953 379.296,216.455   379.296,216.455 358.245,229.161 270.702,178.342 158.867,241.475 M403.589,76.647l-22.083,12.795l-22.12-12.795V51.339l22.076-12.807  l22.127,12.807V76.647z",
                "duration": 1700,
				"reverse": true
            }
        ],
        "dimensions": {
            "width": 550,
            "height": 550
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
	
//	setInterval(function() {
//	   	$('polygon').each(function(){
//			$(this).fadeTo( 5000 , (Math.random() * (0 - 0.3) + 0.3), 'swing');
//		});
//	}, 6000); // every 1000 ms
	
 	$('#logo').lazylinepainter({
    		"svgData": pathObj,
    		"strokeWidth": 3,
    		"strokeColor": "#fff",
			"drawSequential": true,
			"responsive": true,
			"onComplete": wadus,
			"delay": 1500
		}).lazylinepainter('paint');
	});

	$(document).ready(function(){ 
		$('.comingsoon a').mouseover(function(){
		    $('.bg_image').addClass('scale');
		});
		$('.comingsoon a').mouseout(function(){
		    $('.bg_image').removeClass('scale');
		});
		// $('#logo2').mouseover(function(){
		// 	$('.bg_image').addClass('scale');
		// });
		// $('#logo2').mouseout(function(){
		//     $('.bg_image').removeClass('scale');
		// });
	});


var wadus = function() {
	$( "#logo2" ).animate({
	    width: "70%",
		opacity: 1
	  }, 1200, function() {
	    // Animation complete.
	  });
	$("#logo").animate({ opacity: 0 }, 600 );
//	$( "#logo2" ).hover(function() {
//		$(this).animate({ opacity: 0 }, 300 );
//		$("#logo").animate({ opacity: 0.2 }, 300 );
//	}, function() {
//		$(this).animate({ opacity: 1 }, 300 );
//		$("#logo").animate({ opacity: 0 }, 300 );
//	});
 };

 $(function () {
       $('.quotes div').hide();
             $('.quotes div:first-child').show();
             setInterval(function () {
                   $('.quotes div:first-child').fadeOut(2000)
                         .next('div').fadeIn(4000)
                         .end().appendTo('.quotes');
             },
       6000);
 });
