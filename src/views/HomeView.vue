<template>
  <div id="home" class="container">
    <h1 id="welcoming">Welcome to RBTech</h1>
   <router-link to="/home"><button>Go to HomePage</button></router-link> 
  </div>
</template>

<style scoped>
#home{
  text-align: center;
  color: white;
}
#welcoming{
  margin-top:300px;
  font-size:75px ;
}
</style>

<script>
    import Navbar from '../components/Navagation.vue'
export default {
    components : {
        Navbar
    }
}
</script>
