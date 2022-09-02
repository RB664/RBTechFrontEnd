<template>
  <div class="modal fade" :id="'edit' + product.productID" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Edit Product
          </h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mx-auto mb-3">
              <label for="Name" class="form-label">Name:</label>
              <input type="text" class="modal-title" id="Name" v-model="product.Name" placeholder="Product Name" />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Image" class="form-label">Product:</label>
              <input type="text" class="modal-title" id="Image" v-model="product.Image" placeholder="Product Image" />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Information" class="form-label"></label>Information
              <input type="text" class="modal-title" id="Inoformation" v-model="product.Information"
                placeholder="Information" />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Category" class="form-label">Category</label>
              <input type="text" class="modal-title" id="Category" v-model="product.Category"
                placeholder="Product Category" />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Price" class="form-label">Price</label>
              <input type="text" class="modal-title" id="Price" v-model="product.Price" placeholder="Price" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button @click="edit" type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Edit this GPU
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    edit() {
      return this.$store.dispatch("editProduct", this.product)
    }
  }
}
</script>

<style>
</style>