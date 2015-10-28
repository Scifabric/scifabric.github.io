if (Modernizr.webaudio) {
    // create WebAudio API context
    var context = new AudioContext()
    
        // Create lineOut
    var lineOut = new WebAudiox.LineOut(context)
    
    // load a sound and play it immediatly
    WebAudiox.loadBuffer(context, '/assets/snd/loop.mp3', function(buffer){
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
            source.connect(lineOut.destination);
            // start the sound now
            source.start(20);
            });
    
    
    // load a sound and play it immediatly
    WebAudiox.loadBuffer(context, '/assets/snd/tminus.mp3', function(buffer){
            // init AudioBufferSourceNode
            var source  = context.createBufferSource();
            source.buffer   = buffer;
            source.connect(lineOut.destination)
            var waypoint = new Waypoint({
                    element: document.getElementById('tminus'),
                    handler: function(direction) {
                        source.start(0);
                        console.log("3 step");},
                    offset: 120 
                });
            });
    
    
    
    // load a sound and play it immediatly
    WebAudiox.loadBuffer(context, '/assets/snd/ignition.mp3', function(buffer){
            // init AudioBufferSourceNode
            var source  = context.createBufferSource();
            source.buffer   = buffer;
            source.connect(lineOut.destination)
            var waypoint = new Waypoint({
                    element: document.getElementById('ignition'),
                    handler: function(direction) {
                        source.start(0);
                        console.log("3 step");},
                    offset: 120 
                });
            });
    
    
    // load a sound and play it immediatly
    WebAudiox.loadBuffer(context, '/assets/snd/3.mp3', function(buffer){
            // init AudioBufferSourceNode
            var source  = context.createBufferSource();
            source.buffer   = buffer;
            source.connect(lineOut.destination)
            var waypoint = new Waypoint({
                    element: document.getElementById('3'),
                    handler: function(direction) {
                        source.start(0);
                        console.log("3 step");},
                    offset: 120 
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
                    offset: 120 
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
                    offset: 120 
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
                    offset: 120 
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
                    offset: 120 
                });
            });
}
else {
    console.log("REALLY!?? You should use a moder web browser to browse this case study!");
}
