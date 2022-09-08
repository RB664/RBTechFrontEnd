<template>
  <footer class="fixed-bottom">
    <div class="container-fluid" id="Footer">
      <h5>Copyright &copy;2022 - All rights reserved by RBTech</h5>
    </div>

  </footer>
</template>

<style scoped>
.container,
.container-fluid {
  background-color: #280037;
  color: white;
  text-align: center;
  height: 50PX;
  width: 100%;
}

h5{
  padding-top: 10px;
}



@media only screen and (min-width: 300px) and (max-width: 320px) {

  .container,
  .container-fluid {
    font-size: 10px;
  }

  h5 {
    font-size: 13px;
  }

}

@media only screen and (min-width:320px) and (max-width:375px) {

  .container,
  .container-fluid {
    font-size: 11px;
  }

  h5 {
    font-size: 14px;
  }

}

@media only screen and (min-width:375px) and (max-width:425px) {

  .container,
  .container-fluid {
    font-size: 12px;
  }

  h5 {
    font-size: 14px;
  }

}

@media only screen and (min-width:425px) and (max-width: 768px) {

  .container,
  .container-fluid {
    font-size: 15px;
  }

  h5 {
    font-size: 15px;
  }

}
</style>

<script>

</script>