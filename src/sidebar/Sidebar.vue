<template>
  <b-nav class="sidebar" vertical :class="{ open: sidebarOpen }">
    <!-- <b-nav-text class="link-section-text">
      <span class="text-muted">Links</span>
    </b-nav-text> -->
    <b-nav-item href="#" id="Scenes" >
      <font-awesome-icon icon="th" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-nav-item href="#" id="Stars" >
      <font-awesome-icon icon="th" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-nav-item href="#" id="Categories" >
      <font-awesome-icon icon="th" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-nav-item href="#" id="DVDs" >
      <font-awesome-icon icon="th" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-nav-item href="#" id="Websites" >
      <font-awesome-icon icon="th" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-nav-item href="#" id="Settings" >
      <font-awesome-icon icon="th" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-nav-item href="#" id="Logs" >
      <font-awesome-icon icon="th" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-tooltip target="Scenes" placement="right">Scenes</b-tooltip>
    <b-tooltip target="Stars" placement="right">Stars</b-tooltip>
    <b-tooltip target="Categories" placement="right">Categories</b-tooltip>
    <b-tooltip target="DVDs" placement="right">DVDs</b-tooltip>
    <b-tooltip target="Websites" placement="right">Websites</b-tooltip>
    <b-tooltip target="Settings" placement="right">Settings</b-tooltip>
    <b-tooltip target="Logs" placement="right">Logs</b-tooltip>
  </b-nav>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.sidebar {
  background: #333;
  /* opacity: 0.4; */
  -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  -webkit-transform: translate(-1000px, 0);
          transform: translate(-1000px, 0);
  position: fixed;
  height: 100%;
}
.open {
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
}
.title-text {
  color: #aaa;
}
#side-top {
  margin-left: 12px;
  margin-top: 14px;
  margin-right:10px;

}
#side-top div {
  display: inline-block;
}
#brand-logo {
  width: 30px;
  height: 30px;
}

</style>
