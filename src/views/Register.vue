<template>
  <Navbar/>
<div id="register" class="container-fluid">
    <h1>Register</h1>
    <form @submit.prevent="register">
  <div class="mb-3 mt-4">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="text" class="form-control"  id="Name" name="Name" aria-describedby="nameHelp" placeholder="Please enter your name" v-model="Name">
  </div>
  <div class="mb-3 mt-4">
    <label for="exampleInuputImage" class="form-label">Image</label>
    <input type="url" class="form-control" name="Image" id="Image" aria-describedby="imageHelp" placeholder="Paste image URL" v-model="Image">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="Email" name="Email" aria-describedby="emailHelp" placeholder="Please enter your Email" v-model="Email">
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="Password" name="Password" placeholder="Please enter your Password" v-model="Password">
  </div>
  <div v-if="msg">
    {{msg}}
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
    height: 560px;
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
    },
    data() {
        return {
            Name: "",
            Image: "",
            Email: "",
            Password: "",
            clicked: false
        };
    },
    computed: {
        msg() {
            return this.$store.state.msg;
        },
    },
    methods: {
        register() {
            const user = {
              Name : this.Name,
              Image : this.Image,
              Email: this.Email,
              Password: this.Password,
            }
            this.clicked = true
            this.$store.dispatch("register", user);
        },
    },
};
</script>