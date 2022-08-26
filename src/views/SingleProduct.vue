<template>
    <div class="container">
        <div v-if="product" class="row">
            <div class="col-md-5">
                <img :src="product[0].Image"/>
            </div>
            <div class="col-md-4">
                <h2>{{product[0].Name}}</h2>
                <p>{{product[0].Information}}</p>
                <p>Price: R{{product[0].Price}}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['productID'],
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