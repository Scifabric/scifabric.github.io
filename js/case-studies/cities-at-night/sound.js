window.ost = function(start){

    if (Modernizr.webaudio) {
       var context = new AudioContext()
       var lineOut = new WebAudiox.LineOut(context)

       var sounds = {'loop': true, 'tminus': false, 
                     'roger': false, 'ignition': false,
                     'three': false, 'two': false, 'one': false,
                     'zero': false, 'liftoff': false, 'mission': false}

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


    
        $("#btn-mute, #btn-mute-mbl").off('click').on('click', function(event){
            event.preventDefault();
            lineOut.toggleMute();
            if (lineOut.isMuted) {
                $("#mute").removeClass('fa-volume-up');
                $("#mute").addClass('fa-volume-off');
                $("#mute-mbl").removeClass('fa-volume-up');
                $("#mute-mbl").addClass('fa-volume-off');
            }
            else {
                $("#mute").removeClass('fa-volume-off');
                $("#mute").addClass('fa-volume-up');
                $("#mute-mbl").removeClass('fa-volume-off');
                $("#mute-mb-mbll").addClass('fa-volume-up');
            }
        });
    
        function playstory(){
    
            var ostStarted = new Event('ostStarted');
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
                    dispatchEvent(ostStarted);
                    });
            
            
            var tminusWaypoint = $('#tminus').waypoint({
              handler: function(direction) {
                  if ((direction === 'down') && (!sounds['tminus'])) {
                    playSound('houston.mp3', context, lineOut);
                    sounds['tminus'] = true;
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
                    playSound('3alt.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            var twoWaypoint = $('#2').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('2alt.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            
            var oneWaypoint = $('#1').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('1alt.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            var zeroWaypoint = $('#0').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('0alt.mp3', context, lineOut);
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
              offset: '35%'
            });


            var contactWaypoint = $('#mission').waypoint({
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
}

