<template>
  <div id="app">
    <NavView></NavView>
    <!--<Home></Home>-->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import NavView from './components/Nav.vue'
  import Footer from './components/Footer.vue'
  export default{
    components:{
      NavView,
      Footer
    }
  }
</script>

<style>

</style>
