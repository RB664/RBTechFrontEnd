<template>
    <div class="container" id="Cart">
        <!-- Modal -->
        <div class="modal fade" id="cart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="Cart">
                            <div v-for="item in Cart" :key="item.productID" class="card">
                                <img id="productimg" :src="item.Image" />
                                <div class="card-body">
                                    <h2>{{ item.Name }}</h2>
                                    <p>{{ item.Information }}</p>
                                    <p id="price">Price: R{{ item.Price }}</p>
                                    <button @click="this.$store.dispatch('deleteCart', item)">Remove Product</button>
                                </div>
                            </div>
                            <div id="total">
                                Total: R{{total}}.00
                            </div>
                            <button id="clearcart" @click="this.$store.dispatch('clearCart')">Clear Cart</button>
                        </div>
                        <div v-else>
                            <p>Your cart is empty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#Cart {
    text-align: center;
}

#clearcart {
    margin-top: 20px;
}
</style>

<script>
export default {
    props: ["cart"],
    computed: {
        Cart() {
            return this.$store.state.cart;
        },
        total() {
            let prices = this.$store.state.cart;
            if (prices != null) {
                let sum = prices.reduce((x, cart) => {
                    return x + cart.Price;
                }, 0);
                return (((sum)))
            }
        }
    },
};

</script>