<template>
    <Navbar />
    <div id="allproducts" class="container">
        <form action="" class="search-bar" id="form">
            <div class="row" id="formrow">
                <div class="col-lg-6">
                    <input class="form-control" type="search" name="search" pattern=".*\S.*" v-model="search" required
                        placeholder="Search Bar" />
                </div>
                <div class="col-lg-6">
                    <select class="form-control" name="" id="Category" v-model="Category">
                        <option value="All" selected disabled>Sort by Product</option>
                        <option value="All">All</option>
                        <option value="Component">Component</option>
                        <option value="Workstation">Workstation</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Gaming PC">Gaming PC</option>
                    </select>
                </div>
            </div>

        </form>
        <div v-if="products" class="row" id="productsrow">
            <div v-for="product of products" :key="product.id" class="card">
                <router-link :to="{ name: 'singleproduct', params: { id: product.productID } }">
                    <img :src="product.Image" alt="">
                    <div class="card-body">
                        <h5>{{ product.Name }}</h5>
                        <h5>R{{ product.Price }}</h5>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
#productsrow {
    gap: 40px;
    justify-content: center;
}

img {
    width: 284px;
    height: 260px;
}

.card {
    width: 299px;
    height: 410px;
}

#allproducts {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 150px;
}

form {
    width: 100%;
    margin-bottom: 75px;
}

</style>

<script>
import Navbar from '../components/Navagation.vue';
import Footer from '../components/Footing.vue'
export default {
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            search: "",
            Category: "All",
        };
    },

    computed: {
        products() {
            return this.$store.state.products
        },
        products() {
            return this.$store.state.products?.filter((products) => {
                let isMatch = true;
                if (!products.Name.toLowerCase().includes(this.search)) {
                    isMatch = false;
                }
                if (this.Category !== "All" && this.Category !== products.Category) {
                    isMatch = false;
                }
                return isMatch;
            });
        },
    },
    mounted() {
        this.$store.dispatch("getProducts")
    },
}
</script>