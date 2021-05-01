<template>
  <!-- <NavBar/> -->
    <div id="main" >
  <SideBar/>
    <router-view />
    </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: {
    // NavBar,
    SideBar
  },
}
</script>

<style>
  @import '../codrops/css/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  display: grid;
  grid-template-columns: 6rem auto;
  /* Or grid-template-columns: config('width.24') auto; */
}

@media (min-width: 1200px) { 
/* Or @media (min-width: config('screens.xl')) { */
  
  #main { grid-template-columns: 12rem auto; }
  /* Or #main { grid-template-columns: config('width.48') auto; } */
}
</style>
