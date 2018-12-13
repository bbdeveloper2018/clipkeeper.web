<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <font-awesome-icon icon="chevron-circle-left" @click="toggleSideMenu()" class="pointer" size="lg" :transform="arrow_transform"></font-awesome-icon>
    <b-navbar-brand href="#" id="brand">
      <font-awesome-icon icon="film" @click="toggleSideMenu()"></font-awesome-icon>
      Clip Keeper
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav  class="ml-auto">
        <b-nav-item href="#" active>Scenes</b-nav-item>
        <b-nav-item href="#">Stars</b-nav-item>
        <b-nav-item href="#">Categories</b-nav-item>
        <b-nav-item href="#">DVDs</b-nav-item>
        <b-nav-item href="#">Websites</b-nav-item>
        <b-nav-item href="#">Settings</b-nav-item>
        <b-nav-item href="#">Log</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'MainNavbar',
  data: function() {
    return {
      arrow_index: 0,
    }
  },
  computed: {
    arrow_transform: function() {
      return { rotate: this.arrow_index };
    },
  },
  methods: {
    toggleSideMenu() {
      this.$emit('clicked');        
      this.arrow_index = Math.abs(this.arrow_index - 180);
    },
    rotate(start, stop, reverse) {
      setTimeout(function() {
        this.arrow_index = 180;
      }, 1000);
    },
  },  
};
</script>
<style scoped>
  .pointer {
    cursor: pointer;
    color: gray;    
  }
  #brand {
    padding-left: 40px;
  }
</style>
