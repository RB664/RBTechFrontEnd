<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" id="logo">RBTech</router-link>
          <button type="button" id="cartbtn" data-bs-toggle="modal" :data-bs-target="'#cart'"><i class="fa-solid fa-cart-shopping">{{ num }}</i></button>
          
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span id="toggler" class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end fw-bolder" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <button id="close" type="button" class="btn-close text-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/allproducts">All Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/userprofile">Userprofile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Users</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <cart/>
</template>

<style scoped>
.navbar {
  background-color: #280037;
}

.offcanvas {
  background-color: #280037;
}

li {
  display: block;
  text-align: center;
  color: white;
}

.nav-link {
  color: white;
}

li:hover:not(.active) {
  background-color: #3A0055;
}

nav a.router-link-exact-active {
  background-color: #380250;
  color: white;
  text-decoration: underline;
  font-weight: bold;
}

.offcanvas-body {
  background-color: #280037;
}

#logo {
  font-weight: bolder;
  
}
#cartbtn{
        position: absolute;
        right: 5%;
        top: 13%;
        width: 60px;
        height: 42px;
        border-radius:10% ;
    }
.navbar-toggler{
  background-color:#EFEFEF;
}

@media only screen and (min-width:300px) and (max-width:320px) {
  #cartbtn{
        right: 25%;
    }
}
@media only screen and (min-width:320px) and (max-width: 375px) {
  #cartbtn{
        right: 22%;
    }
}
@media only screen and (min-width:375px) and (max-width: 425px) {
  #cartbtn{
        right: 22%;
    }
}
@media only screen and (min-width:425px) and (max-width: 500px) {
  #cartbtn{
        right: 18%;
    }
}
@media only screen and (min-width:500px) and (max-width: 600px) {
  #cartbtn{
        right: 15%;
    }
}
@media only screen and (min-width:600px) and (max-width: 768px) {
  #cartbtn{
        right: 12%;
    }
}
@media only screen and (min-width:768px) and (max-width: 850px) {
  #cartbtn{
        right: 10%;
    }
}
@media only screen and (min-width:850px) and (max-width: 950px) {
  #cartbtn{
        right: 10%;
    }
}
@media only screen and (min-width:950px) and (max-width: 1024px) {
  #cartbtn{
        right: 10%;
    }
}
@media only screen and (min-width:1024px) and (max-width: 1440px) {
  #cartbtn{
        right: 8%;
    }
}
</style>

<script>
import cart from "../components/Cart.vue"
export default {
  components: {
    cart
  },
  mounted() {
    this.$store.dispatch('admincheck')
  },
  computed: {
    num: function () {
      let Cnum = this.$store.state.cart;
      if (Cnum === null || Cnum === undefined) {
        Cnum = 0;
        return Cnum;
      } else {
        // Cnum.length
        let i = Cnum.length;
        return (i);
      }
    },
  }
}
</script>