<template>
    <Navbar/>
    <div id="singleproduct" class="container">
        <div v-if="product" class="row">
            <div class="col-md-6">
                <img id="productimg" :src="product[0].Image"/>
            </div>
            <div class="col-md-6">
                <h2>{{product[0].Name}}</h2>
                <p>{{product[0].Information}}</p>
                <p id="price">Price: R{{product[0].Price}}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style scoped>
    #productimg{
        width: 100%;
        height: auto;
    }
    #singleproduct{
        text-align: center;
        margin-top: 150px;
        margin-bottom: 150px;
        color: white;
    }
    #price{
        text-decoration: none;
    }
</style>

<script>
    import Navbar from '../components/Navagation.vue'
    import Footer from '../components/Footing.vue'
    export default {
        props: ['productID'],
        components : {
            Navbar,
            Footer
        },
        mounted() {
            this.$store.dispatch("getProduct",
            this.$route.params.id)
        },

    computed: {
        product(){
            return this.$store.state.product
        }
    },
}
</script>