<template>
  <div id="app">
    <MainHeader @clicked="toggleSidebarBtn"></MainHeader>
    <div id="wrapper">
      <Sidebar :sidebar-open="sidebarOpen" id="sidebar"></Sidebar>
      <main :class="{ slideon: sidebarOpen, slideoff: !sidebarOpen }">
        <router-view />
      </main>
    </div>
    <!-- <MainFooter /> -->
  </div>
</template>
<script>
import MainHeader from '@/header/MainHeader.vue';
// import MainFooter from '@/footer/MainFooter.vue';
import Sidebar from '@/sidebar/Sidebar.vue';

export default {
  components: { MainHeader, Sidebar },
  data() {
    return {
      sidebarOpen: true,
      slide: 'slide-on',
    };
  },
  methods: {
    toggleSidebarBtn() {
      this.sidebarOpen = !this.sidebarOpen;
    },

  },
};
</script>

<style>
body {
  background-color: #181818 !important;
}
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#sidebar {
  top: 46px;
}
main{
  padding: 20px 30px;
}
.slideon {
  margin-left: 53px;
  transition: 0.4s;
}
.slideoff {
  margin-left: 0;
  transition: 0.4s;
}
</style>
