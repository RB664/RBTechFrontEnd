<template>
  <Navbar/>
  <div id="About" class="container-fluid">
    <h1>About</h1>
    <div id="about" class="container">
      <p>RBTech is an online PC store.You can buy Laptops,Workstations,PC Components and Gaming PC's.</p>
      <p>Below are the explations of the products we sell</p>
    <h2>PC Components</h2>
    <p>Components are physical parts(hardware) that a computer system requires to function. It encompasses everything with a circuit board that operates within a PC or laptop; including the motherboard, graphics card, CPU (Central Processing Unit), ventilation fans, webcam, power supply, and so on.</p>
    <h2>Workstation</h2>
    <p>A workstation is a computer intended for individual use that is faster and more capable than a personal computer. It's intended for business or professional use (rather than home or recreational use)</p>
    <h2>Laptops</h2>
    <p>A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings.</p>
    <h2>Gaming PC</h2>
    <p>A gaming computer, also known as a gaming PC, is a specialized personal computer designed for playing video games at very high standards. Gaming PCs typically differ from mainstream personal computers by using high-performance video cards and high core-count central processing units with raw performance.</p>
  </div>
    </div>
    <Footer/>
</template>

<style scoped>
#About{
  margin-top: 100px;
  text-align: center;
  color: white;
  margin-bottom: 150px;
}
#about{

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