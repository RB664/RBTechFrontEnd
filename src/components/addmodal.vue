<template>
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ID
        <input type="text">
        Name
        <input type="text">
        Image
        <input type="text">
        Information
        <input type="text">
        Category
        <input type="text">
        Price
        <input type="text">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="">Add Product</button>
      </div>
    </div>
  </div>
</div>

</template>