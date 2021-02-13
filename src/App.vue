<template>
  <div id="app">
    <Topbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Topbar,
    Footer
  },
  methods() {
    noScroll() {
      
    }
  }
}
</script>