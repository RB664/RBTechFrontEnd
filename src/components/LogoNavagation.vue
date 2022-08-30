<template>        
<nav class="navbar fixed-top">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" >RBTech</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
    .navbar{
        background-color: #280037;
    }
    .offcanvas{
        background-color: #280037;
    }
    li{
        display: block;
        text-align: center;
        color: white;
    }
    li:hover:not(.active){
        background-color: #3A0055;
    }
    nav a.router-link-exact-active {
        background-color: #380250;
  color:white;
} 
.offcanvas-body{
    background-color: #280037;
}
</style>