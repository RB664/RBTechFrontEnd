<template>
    <Navbar />
    <div id="Posters" class="container">
        <div id="posters">
            <img src="https://i.postimg.cc/4NyCYkV2/Components.jpg" alt="">
        </div>
        <div id="posters">
            <img src="https://i.postimg.cc/2SpQh0Qn/Workstations.jpg" alt="">
        </div>
        <div id="posters">
            <img src="https://i.postimg.cc/VNfbWpd0/Laptop-Deals.jpg" alt="">
        </div>
        <div id="posters">
            <img src="https://i.postimg.cc/fT7Lq54c/Gaming-PC-s.jpg" alt="">
        </div>
    </div>
    <Footer/>
</template>

<style scoped>
#Posters{
    margin-top: 100px;
    margin-bottom: 150px;
}
img {
    width: 95%;
    height: auto;
    object-fit: cover;
}

</style>

<script>
import Navbar from '../components/Navagation.vue'
import Footer from '../components/Footing.vue'
export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

