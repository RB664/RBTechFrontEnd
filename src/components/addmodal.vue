<template>
  <div class="modal fade" id="addproduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</template>

<script>
export default {
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
    }
}
</script>

<style>

</style>