<template>
    <Navbar />
    <div class="container" id="user">
        <div v-if="user" id="users">
            <img :src="user[0].Image" alt="" id="Image">
            <h2>Name</h2>
            {{ user[0].Name }}
            <h2>Email</h2>
            {{ user[0].Email }}
            <button id="cartbutton" class="custom-btn btn form-control" type="button" @click="logout">
                Logout
            </button>
        </div>

    </div>
    <Footer />
</template>

<script>
import Navbar from "../components/Navagation.vue"
import Footer from "../components/Footing.vue"
export default {
    components: {
        Navbar,
        Footer
    },
    mounted() {
        this.$store.dispatch('getUser', this.$store.state.user.userID)
    },
    methods: {
        logout() {
            this.$store.state.user = null
            this.$store.state.cart = null
            localStorage.removeItem('user')
            this.$router.push('/')
        }
    },
    computed: {
        user() {
            return this.$store.state.singleUser
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
    width: 100%;
    height: auto;
}

#user {
    margin-top: 100px;
    width: 300px;
    text-align: center;
    background-color: black;
    color: white;
}

</style>