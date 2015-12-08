
<template>
  <div class="container">
    <h1> Hello Vue.js App! </h1>
    <p>
      <a v-link="'/'"> Root </a> | 
      <a v-link="'home'"> Home </a>
    </p>
    <router-view></router-view>
  </div> <!-- .container -->
</template>

<script>
  export default {
    replace: false,
    data () {
      return {
        
      }
    },

  }
</script> 
