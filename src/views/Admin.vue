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
                    <th>
                        <button data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="fa-solid fa-plus"></i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody v-if="products">
                <tr v-for="product in products" :key="product.productID">
                    <td>{{ product.productID }}</td>
                    <td>{{ product.Name }}</td>
                    <td><img id="productimg" :src="product.Image" alt=""></td>
                    <td>{{ product.Information }}</td>
                    <td>{{ product.Category }}</td>
                    <td>R{{ product.Price }}</td>
                    <td><button data-bs-toggle="modal" :data-bs-target="'#edit'+product.productID"><i class="fa-solid fa-pen"></i></button></td>
                    <td><button @click="$store.dispatch('deleteProduct', product.productID)"><i
                                class="fa-solid fa-trash-can"></i></button></td>
                </tr>
            </tbody>

        </table>

    </div>
<!--Add Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label>Name</label>
        <input v-model="Name" type="text" class="form-control">
        <label>Image</label>
        <input v-model="Image" type="text" class="form-control">
        <label>Information</label>
        <input v-model="Information" type="text" class="form-control">
        <label>Category</label>
        <input v-model="Category" type="text" class="form-control">
        <label>Price</label>
        <input v-model="Price" type="number" class="form-control">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="add" data-bs-dismiss="modal">Add Product</button>
      </div>
    </div>
  </div>
</div>

<!-- Edit Module -->
<div v-if="products">
<div v-for="product in products" :key="product.productID">
<div :id="'edit' + product.productID" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Edit Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label>Name</label>
        <input v-model="Name" type="text" class="form-control">
        <label>Image</label>
        <input v-model="Image" type="text" class="form-control">
        <label>Information</label>
        <input v-model="Information" type="text" class="form-control">
        <label>Category</label>
        <input v-model="Category" type="text" class="form-control">
        <label>Price</label>
        <input v-model="Price" type="number" class="form-control">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" :data-bs-target="'#edit' + product.productID"  data-bs-dismiss="modal">Edit Product</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</template>

<style scoped>
.table {
    border: 1px black;
}

#productimg {
    width: 100%;
    height: auto;
}
</style>

<script>
export default {
    props : ['product'],
    mounted() {
        this.$store.dispatch('getProducts');
    },
    computed: {
        products() {
            return this.$store.state.products;
        },

    },
    data(){
        return{
            Name: null,
            Image: null,
            Information: null,
            Category: null,
            Price: null
        };
        
    },
    methods: {
        add(){
            return this.$store.dispatch("addProduct", {
                Name:this.Name,
                Image:this.Image,
                Information:this.Information,
                Category:this.Category,
                Price:this.Price
            })
        },
        edit() {
            return this.$store.dispatch("editProduct", this.product)
        }
        
    }
}
</script>