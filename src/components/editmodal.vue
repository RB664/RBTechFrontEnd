<template>
  
</template>

<script>
export default {
    props:["product"],
    methods: {
        edit() {
            return this.$store.dispatch("editProduct", this.product)
        }
    } 
}
</script>

<style>

</style>