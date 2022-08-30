<template>
    <Navbar/>
    <div id="allproducts" class="container">
        <div v-if="products">
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
</template>

<style scoped>
    #allproducts{
        margin-top: 100px;
        text-align: center;
    }
</style>

<script>
import Navbar from '../components/Navagation.vue';
export default {
    components : {
        Navbar
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