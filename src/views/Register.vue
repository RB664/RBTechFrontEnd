<template>
  <Navbar/>
<div id="register" class="container-fluid">
    <h1>Register</h1>
    <form>
  <div class="mb-3 mt-4">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Please enter your name">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter your Email">
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Please enter your Password">
  </div>
  <button class="btn form-control" type="submit">Register</button>
  <div><p>Already registered click here to <router-link to="/login">Login</router-link></p></div>
</form>
</div>
<Footer/>
</template>

<style scoped>
  h1{
    padding-top: 50px;
  }
#register{
    text-align: center;
    width: 500px;
    height: 500px;
    margin-top: 150px;
    background-color: white;
    border-radius: 5%;
    margin-bottom: 150px;
}
</style>

<script>
  import Navbar from '../components/Navagation.vue'
  import Footer from '../components/Footing.vue'
  export default {
    components : {
      Navbar,
      Footer
    }
  }
</script>