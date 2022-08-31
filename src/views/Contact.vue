<template>
    <Navbar/>
    
    <div id="Contact" class="container-fluid">
        <h1>Contact us</h1>
        <h5>Message us on this number</h5>
        <div><i class="fa-solid fa-phone"></i>0725278261</div>
        <h5>Write us an email to this email address</h5>
        <div><i class="fa-solid fa-envelope"></i>rbtech@gmail.com</div>
    </div>
<div>
    
</div>
<Footer/>
</template>

<style scoped>
    #Contact{
        margin-top: 100px;
        text-align: center;
        color: white;
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