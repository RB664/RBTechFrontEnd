<template>
  <footer class="fixed-bottom">
    <div class="container-fluid" id="Footer">
      <div class="row">
        <div class="col-2"><i class="fa-brands fa-instagram"></i>Instagram</div>
      <div class="col-2"><i class="fa-brands fa-twitter"></i>Twitter</div>
      <div class="col-2"><i class="fa-brands fa-facebook"></i>Facebook</div>
   <div class="col-2"><i class="fa-brands fa-tiktok"></i>TikTok</div>
   <div class="col-2"><i class="fa-brands fa-youtube"></i>Youtube</div>
      </div>
      
   
    <h5>Copyright &copy;2022 - All rights reserved by RBTech</h5>
    </div>
    
  </footer>
</template>

<style scoped>
.container, .container-fluid {
  background-color: #280037;
  color: white;
  text-align: center;
  height: 90px;
  width: 100%;
}

i {
  margin-top: 20px;
  font-size: large;
  margin: 10px;
}

.row{
  justify-content: center;
}

@media only screen and (min-width: 300px) and (max-width: 320px) {
  .container, .container-fluid{
    font-size: 10px;
  }
  h5{
    font-size: 13px;
  }
  i{
    font-size: 15px;
  }
}
@media only screen and (min-width:320px) and (max-width:375px) {
  .container, .container-fluid{
    font-size: 11px;
  }
  h5{
    font-size: 14px;
  }
  i{
    font-size: 20px;
  }
}
@media only screen and (min-width:375px) and (max-width:425px) {
  .container, .container-fluid{
    font-size: 12px;
  }
  h5{
    font-size: 14px;
  }
  i{
    font-size: 20px;
  }
}
@media only screen and (min-width:425px) and (max-width: 768px) {
  .container, .container-fluid{
    font-size: 15px;
  }
  h5{
    font-size: 15px;
  }
  i{
    font-size: x-large;
  }
}

</style>

<script>

</script>