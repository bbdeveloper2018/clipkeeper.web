<template>
  <div id="previewer">
    <div id="outer-frame">
      <a href="#">
        <video :src="src"
            class="video-frame" muted
            @mouseover="play($event)" @mouseout="pause($event)">
          <!-- <source :src="src" type="video/mp4"> -->
          Video format is not supported.
        </video>
      </a>
    </div>
  </div>
</template>
<script>
var URL = window.URL || window.webkitURL;
export default {
  name: 'Previewer',
  props: [ 'src' ],
  computed: {
    getSrc(e){
      var myfile = new File(e);
      var fileURL = URL.createObjectURL(file);
      return fileURL;
    }
  },
  methods: {
    play: function(event) {
      console.log(this.src);
      var player = event.target;
      var playPromise = player.play();
      
      player.playbackRate = 15;
      if (playPromise !== undefined) {
        playPromise.then(function() {
          // Automatic playback started!
        });
      }
    },
    pause: function(event) {
      var player = event.target;
      var pausePromise = player.pause();
      player.currentTime = 20;
      if (pausePromise !== undefined) {
        pausePromise.then(function(){
          // Automatic playback stopped.
        });
      }
    },
  },
}
</script>
<style scoped>
#outer-frame {
  width: 300px;
}
.video-frame {
  width: 100%;
}
</style>
