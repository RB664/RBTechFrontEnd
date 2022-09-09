<template>
    <Navbar />

    <div class="container" id="user">
        <div v-if="user" id="users">
            <img :src="user[0].Image" alt="" id="Image">
            <h2>Name</h2>
            {{ user[0].Name }}
            <h2>Email</h2>
                {{ user[0].Email }}
            <div>
                <button  id="btns" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-pen"></i>
                </button>
                
                
                <button v-if="user[0].Role !== 'Admin'"  @click="this.$store.dispatch('deleteSUser', user[0].userID)">
                    <i class="fa-solid fa-trash-can"></i>
                    </button>
            </div>
            <button id="logout" class="custom-btn btn form-control" type="button" @click="logout">
                Logout
            </button>
        </div>
    </div> 

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">User Profile</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="user">

                    <div class="m-3">
                        <label for="">Image url</label>
                        <input class="form-control" type="text" v-model="user[0].Image">
                    </div>

                    <div class="m-3">
                        <label for="">Name :</label>
                        <input class="form-control" type="text" v-model="user[0].Name">
                    </div>

                    <div class="m-3">
                        <label for="">Email :</label>
                        <input class="form-control" type="text" v-model="user[0].Email">
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="this.$store.dispatch('editUser', user[0])" data-bs-dismiss="modal">
                        Edit User
                    </button>
                </div>
            </div>
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
            localStorage.clear();
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
    margin-top: 10px;
    border-radius: 50%;
    width: 100%;
    height: auto;
}

#user {
    margin-top: 150px;
    width: 300px;
    text-align: center;
    background-color: black;
    color: white;
    margin-bottom: 70px;
}

#logout {
    color: white;
    margin-bottom: 10px;
}

#btns {
    margin: 10px;
}
</style>