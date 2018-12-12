<template>
  <div id="home">
    <h5 class="text-muted">Home Page</h5>
    <!-- <Previewer src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4#t=20" />
    <Previewer src="https://addpipe.com/sample_vid/short.mp4#t=20" /> -->
  </div>
</template>
<script>
import Previewer from '../viewer/Previewer.vue';

// @ is an alias to /src
export default {
  name: 'Home',
  components: { Previewer },
  methods: {
    playthumb() {
      this.$refs.vid.play();
    },
  },
};
</script>
<style scoped>
#home {
  padding-top:44px;

}
.clip-thumbnail{
  height: 35px;
}
</style>
