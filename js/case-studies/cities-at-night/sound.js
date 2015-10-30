$("document").ready(function(){
    if (Modernizr.webaudio) {
       var context = new AudioContext()
       var lineOut = new WebAudiox.LineOut(context)

       function playSound(sound, context, lineout) {
           var snd = '/assets/snd/' + sound;
           WebAudiox.loadBuffer(context, snd, function(buffer){
               // init AudioBufferSourceNode
               var source  = context.createBufferSource();
               source.buffer   = buffer;
               source.connect(lineOut.destination)
               source.start(0);
           });
       }


    
        $("#btn-mute").off('click').on('click', function(){
            lineOut.toggleMute();
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
    
            var loopsound = Modernizr.audio.ogg ? '/assets/snd/loop3.ogg' : '/assets/snd/loop.mp3';
    
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
            WebAudiox.loadBuffer(context, '/assets/snd/roger.mp3', function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.buffer   = buffer;
                    // Create a stereo panner
                    var panNode = context.createStereoPanner();
                    panNode.pan.value = 1;
                    //source.connect(lineOut.destination);
                    source.connect(panNode);
                    panNode.connect(lineOut.destination);
                    // start the sound now
                    source.start(5);
                    });
            
    
            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, '/assets/snd/roger.mp3', function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.buffer   = buffer;
                    // Create a stereo panner
                    var panNode = context.createStereoPanner();
                    panNode.pan.value = -1;
                    //source.connect(lineOut.destination);
                    source.connect(panNode);
                    panNode.connect(lineOut.destination);
                    // start the sound now
                    source.start(15);
                    });
    
    


            var tminusWaypoint = $('#tminus').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('tminus.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });

            var tminusWaypoint = $('#ignition').waypoint({
              handler: function(direction) {
                  if (direction === 'down') {
                    playSound('ignition.mp3', context, lineOut);
                  }
                },
              offset: '25%'
            });
    
            
            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, '/assets/snd/3.ogg', function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.buffer   = buffer;
                    source.connect(lineOut.destination)
                    var waypoint = new Waypoint({
                            element: document.getElementById('3'),
                            handler: function(direction) {
                                source.start(0);
                                console.log("3 step");},
                            offset: '25%' 
                        });
                    });
            
            
            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, '/assets/snd/2.mp3', function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.buffer   = buffer
                    source.connect(lineOut.destination)
                    var waypoint = new Waypoint({
                            element: document.getElementById('2'),
                            handler: function(direction) {
                                source.start(0);
                                console.log(direction);
                                console.log('2 step');
                                            },
                            offset: '25%' 
                        });
                    });
            
            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, '/assets/snd/1.mp3', function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.buffer   = buffer
                    source.connect(lineOut.destination)
                    var waypoint = new Waypoint({
                            element: document.getElementById('1'),
                            handler: function(direction) {
                                source.start(0);
                                console.log(direction);
                                console.log('1 step');
                                            },
                            offset: '25%' 
                        });
                    });
            
            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, '/assets/snd/0.mp3', function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.buffer   = buffer
                    source.connect(lineOut.destination)
                    var waypoint = new Waypoint({
                            element: document.getElementById('0'),
                            handler: function(direction) {
                                source.start(0);
                                console.log(direction);
                                console.log('0 step');
                                            },
                            offset: '10%' 
                        });
                    });
            
            
            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, '/assets/snd/liftoff.mp3', function(buffer){
                    // init AudioBufferSourceNode
                    var source  = context.createBufferSource();
                    source.buffer   = buffer
                    source.connect(lineOut.destination)
                    var waypoint = new Waypoint({
                            element: document.getElementById('liftoff'),
                            handler: function(direction) {
                                source.start();
                                console.log(direction);
                                console.log('liftoff');
                                            },
                            offset: '25%' 
                        });
                    });
    
    
            }
    
          playstory();
    }
    else {
        $("#btn-mute").hide();
        console.log("REALLY!?? You should use a modern web browser to browse this case study!");
    }
});

