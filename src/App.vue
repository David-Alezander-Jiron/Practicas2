<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <div class="main-content">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';
import Sidebar from './components/SidebarComponent.vue';
import Header from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Header
  }
};
</script>

<style src="./App.css"></style>
