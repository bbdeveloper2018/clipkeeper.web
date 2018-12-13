<template>
  <b-nav class="sidebar" vertical :class="{ open: sidebarOpen }">
    <b-nav-item href="#" id="add" >
      <font-awesome-icon icon="plus-circle" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-nav-text><hr/></b-nav-text>
    <b-nav-item href="#" id="andor">
      <font-awesome-layers class="fa-lg">
        <font-awesome-icon icon="circle" style="color: lightgray;" />
        <font-awesome-layers-text value="&amp;" transform="shrink-4"  style="color: black; padding-left:0px; font-weight: 600;" />
      </font-awesome-layers>
    </b-nav-item>
    <b-nav-item href="#" id="filter" >
      <font-awesome-icon icon="filter" size="lg" style="color: lightgray;" />
    </b-nav-item>
    <b-tooltip target="add" placement="right">Add</b-tooltip>
    <b-tooltip target="andor" placement="right">Toggle Operator</b-tooltip>
    <b-tooltip target="filter" placement="right">Filter</b-tooltip>    
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
  /* overflow-y: hidden; */
}
.open {
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
}
#brand-logo {
  width: 30px;
  height: 30px;
}

</style>
