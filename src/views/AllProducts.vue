<template>
    <Navbar />
    <div id="allproducts" class="container">
        <form action="" id="form">
            <div class="row" id="formrow">
                <div class="col-lg-4">
                    <select class="form-control" name="" id="Price" v-model="Price" @change="SortPrice">
                        <option value="All" disabled>Sort by Price</option>
                        <option value="All">All</option>
                        <option value="asc">Higher Price</option>
                        <option value="desc">Lower Price</option>
                    </select>
                </div>
                <div class="col-lg-4">
                    <input class="form-control" type="search" name="search" pattern=".*\S.*" v-model="search" required
                        placeholder="Search Bar" />
                </div>
                <div class="col-lg-4">
                    <select class="form-control" name="" id="Category" v-model="Category">
                        <option value="All" disabled>Sort by Product</option>
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
        <div v-else>
            <div class="parent">
                <div class="spinner child"></div>
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
    width: 285px;
    height: 225px;

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

/* From uiverse.io by @EmmaxPlay */
.spinner {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.spinner::before,
.spinner:after {
    content: "";
    position: absolute;
    border-radius: inherit;
}

.spinner:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #ffffff 0%, #79005f 100%);
    animation: spin8932 .5s infinite linear;
    left: 0%;
}

.spinner:after {
    width: 85%;
    height: 85%;
    background-image: url('https://i.postimg.cc/mgwFTjqR/Purple-Smoke-Black-Background.jpg');
    top: 50%;
    /* left: 50%; */
    transform: translate(-50%, -50%);
    /* margin-left:auto; */
    /* margin-right: auto; */
}

.parent {
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes spin8932 {
    to {
        transform: rotate(360deg);
    }
}

/* @media only screen and (min-width:300px) and (max-width: 320px) {
    .spinner:before{
        margin-left: 85px;
        margin-bottom: 100px;
    }
    .spinner:after{
        margin-left: 115px;
        margin-bottom: 100px;
    }
}
@media only screen and (min-width:320px) and (max-width: 375px) {
    .spinner:before{
        
        margin-bottom: 100px;
    }
    .spinner:after{
        margin-left: 115px;
        margin-bottom: 100px;
    }
} */
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
    methods:{
    SortPrice() {
      let up = this.Price;
      if (up === "asc") {
        this.$store.state.products.sort((a, b) => {
          return b.Price - a.Price;
        });
      } else {
        this.$store.state.products.sort((a, b) => {
          return a.Price - b.Price;
        });
      }
    }
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