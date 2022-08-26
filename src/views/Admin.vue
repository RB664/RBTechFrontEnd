<template>
<div class="container">
    <table class="table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Information</th>
            <th>Category</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
            <th><button><i class="fa-solid fa-plus"></i></button></th>
        </tr>
        </thead>
        <tbody v-if="products">
            <tr v-for="product in products" :key="product.id">
            <td>{{product.productID}}</td>
           <td>{{product.Name}}</td> 
           <td><img id="productimg" :src="product.Image" alt=""></td>
            <td>{{product.Information}}</td>
            <td>{{product.Category}}</td>
            <td>R{{product.Price}}</td>
            <td><button><i class="fa-solid fa-pen"></i></button></td>
            <td><button @click="$store.dispatch('deleteProduct',product.productID )"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
        </tbody>
        
    </table>
</div>
</template>

<style scoped>
.table{
    border: 1px black;
}

#productimg{
    width: 100%;
    height: auto;
}

</style>

<script>
export default {
    mounted() {
        this.$store.dispatch('getProducts');
    },
    computed: {
    products() {
        return this.$store.state.products;
    }
 }
}

</script>