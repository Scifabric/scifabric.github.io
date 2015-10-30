$("document").ready(function(){
    if (Modernizr.webaudio) {
       var context = new AudioContext()
       var lineOut = new WebAudiox.LineOut(context)

       function playSound(sound, context, lineout) {
           var snd = '/assets/snd/apollo11/' + sound;
           WebAudiox.loadBuffer(context, snd, function(buffer){
               // init AudioBufferSourceNode
               var source  = context.createBufferSource();
               source.buffer   = buffer;
               source.connect(lineOut.destination)
               source.start(0);
           });
       }


    
        $("#btn-mute, #btn-mute-mbl").off('click').on('click', function(){
            lineOut.toggleMute();
            console.log(lineOut.isMuted);
            if (lineOut.isMuted) {
                $("#mute").removeClass('fa-volume-up');
                $("#mute").addClass('fa-volume-off');
            }
            else {
                $("#mute").remove('fa-volume-off');
                $("#mute").addClass('fa-volume-up');
            }
        });
    
        function playstory(){
    
            var loopsound = Modernizr.audio.ogg ? '/assets/snd/apollo11/loop.ogg' : '/assets/snd/apollo11/loop.mp3';
    
            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, loopsound, function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.loop = true;
                    source.buffer   = buffer;
                    source.connect(lineOut.destination);
                    // start the sound now
                    source.start(0);
                    });
            
            
            // load a sound and play it immediatly
            // WebAudiox.loadBuffer(context, '/assets/snd/apollo11/houston.mp3', function(buffer){
            //         // init AudioBufferSourceNode
            //         var source  = context.createBufferSource();
            //         source.buffer   = buffer;
            //         // Create a stereo panner
            //         var panNode = context.createStereoPanner();
            //         panNode.pan.value = 1;
            //         //source.connect(lineOut.destination);
            //         source.connect(panNode);
            //         panNode.connect(lineOut.destination);
            //         // start the sound now
            //         source.start(5);
            //         });
            // 
    
            // load a sound and play it immediatly
            // WebAudiox.loadBuffer(context, '/assets/snd/apollo11/roger.mp3', function(buffer){
            //         // init AudioBufferSourceNode
            //         var source  = context.createBufferSource();
            //         source.buffer   = buffer;
            //         // Create a stereo panner
            //         var panNode = context.createStereoPanner();
            //         panNode.pan.value = -1;
            //         //source.connect(lineOut.destination);
            //         source.connect(panNode);
            //         panNode.connect(lineOut.destination);
            //         // start the sound now
            //         source.start(20);
            //         });
    
    


            var tminusWaypoint = $('#tminus').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('houston.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            var rogerWaypoint = $('#roger').waypoint({
                  handler: function(direction) {
                  if (direction === 'down') {
                    playSound('roger.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });


            var igntionWaypoint = $('#ignition').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('ignition.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            var threeWaypoint = $('#3').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('3.ogg', context, lineOut);
                  }
                },
              offset: '25%'
            });

            var twoWaypoint = $('#2').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('2.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            
            var oneWaypoint = $('#1').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('1.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            var zeroWaypoint = $('#0').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('0.mp3', context, lineOut);
                  }
                },
              offset: '10%'
            });


            var liftoffWaypoint = $('#liftoff').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('liftoff.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });


            var motorWaypoint = $('#motor').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('motor.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

             
            var contactWaypoint = $('#contact').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('landed.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });



            }
    
          playstory();
    }
    else {
        $("#btn-mute").hide();
        console.log("REALLY!?? You should use a modern web browser to browse this case study!");
    }
});

