<template>
<div id="register" class="container-fluid">
    <h1>Register</h1>
    <form>
  <div class="mb-3">
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
  <button type="submit" class="btn btn-primary">Register</button>
  <div><p>Already got registered click here to <router-link to="/login">Login</router-link></p></div>
</form>
</div>
</template>

<style scoped>
#register{
    text-align: center;
    width: 500px;
    height: 500px;
    margin-top: 150px;
}
</style>