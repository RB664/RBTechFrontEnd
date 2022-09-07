<template>
    <Navbar/>
    <div id="login" class="container-fluid">
        <h1 class="mb-3">Login</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input class="form-control" aria-describedby="emailHelp" type="text" placeholder="Please enter Email "
                    name="Email" id="Email" v-model="Email" />
            </div>
            <div class="mb-4">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input class="form-control" aria-describedby="passwordHelp" type="Password"
                    placeholder="Please enter Password" name="Password" id="Password" v-model="Password" />
            </div>
            <div v-if="clicked">
                <div v-if="user">
                    You Logged in
                </div>
                <div v-else>
                    Information is wrong
                </div>
            </div>
            
                <button class="btn form-control" type="submit">Login</button>
            
            <div>Not registered click here to <router-link to="/register">Register</router-link>
            </div>
        </form>
    </div>
    <Footer/>
</template>
<style scoped>
    h1{
        padding-top:50px ;
    }
#login {
    text-align: center;
    width: 500px;
    height: 500px;
    margin-top: 150px;
    background-color: white;
    border-radius: 5%;
    margin-bottom: 150px;
}
</style>

    <script>
        import Navbar from '../components/Navagation.vue'
        import Footer from '../components/Footing.vue'
export default {
    components : {
      Navbar,
      Footer
    },
    data() {
        return {
            Email: "",
            Password: "",
            clicked: false
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        login() {
            const user = {
                email: this.Email,
                password: this.Password,
            }
            this.clicked = true
            this.$store.dispatch("login", user);
        },
    },
};
</script>