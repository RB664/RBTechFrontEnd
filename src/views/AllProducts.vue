<template>
    <Navbar/>
    <div id="allproducts" class="container">
            <div v-if="products" class="row" id="productsrow">
            <div v-for="product of products" :key="product.id" class="card">
        <router-link :to="{ name:'singleproduct', params: {id: product.productID}}">
        <img :src="product.Image" alt="">
        <div class="card-body">
            <h2>R{{product.Price}}</h2>
        </div>
        </router-link>
        </div>
        </div>
    </div>
    <Footer/>
</template>

<style scoped>
    #productsrow{
        gap: 50px;
        justify-content: center;
    }
    img{
        width: 270px;
        height: 255px;
    }
    .card{
        width: 289px;
        height: 350px;
    }
    #allproducts{
        margin-top: 100px;
        text-align: center;
        margin-bottom: 150px;
    }
</style>

<script>
import Navbar from '../components/Navagation.vue';
import Footer from '../components/Footing.vue'
export default {
    components : {
        Navbar,
        Footer
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch("getProducts")
    }
}
</script>