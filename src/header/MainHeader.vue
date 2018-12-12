<template>
  <div id="header">
    <div id="side-menu-toggle" @click="toggleSideMenu()">
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </div>
    <div id="brand">
      <font-awesome-icon icon="film" hide-sm></font-awesome-icon>
      Clip Keeper
    </div>
    <div class="flex"></div>
    <div id="header-items">Welcome Dude!</div>
  </div>
</template>
<script>
export default {
  name: 'MainNavbar',
  methods: {
    toggleSideMenu() {
      this.$emit('clicked');
    },
  },
};
</script>
<style scoped>
#header {
  top: 0;
  width: 100%;
  position: fixed;
  background-color:#222;
  color: lightgray;
  padding: 5px;
  display: flex;
  vertical-align: middle;
}
#header div {
  display: inline-block;
}
#header #side-menu-toggle{
  margin-right: 40px;
  padding-top: 5px;
  padding-left:10px;
  cursor: pointer;
}
#header #brand{
  font-size: 24px;
  font-weight: 400;
  line-height: 36x;
}
.flex {
  flex-grow: 1;
}
#header-items {
  padding-top: 5px;
}
</style>
