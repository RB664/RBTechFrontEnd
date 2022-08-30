<template>
    <div id="login" class="container-fluid">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input class="form-control" aria-describedby="emailHelp" type="text" placeholder="Please enter Email "
                    name="Email" id="Email" v-model="Email" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input class="form-control" aria-describedby="passwordHelp" type="Password"
                    placeholder="Please enter Password" name="Password" id="Password" v-model="Password" />
            </div>
            <div style="border: 1px solid black; height: 1px; width: 300px"></div>
            <div v-if="clicked">
                <div v-if="User">
                    Logged in
                </div>
                <div v-else>
                    Wrong data
                </div>
            </div>
            <button class="btn form-control" type="submit">Login</button>
            <div>Not registered click here to <router-link to="/register">Register</router-link>
            </div>
        </form>
    </div>

</template>
<style scoped>
#login {
    text-align: center;
    width: 500px;
    height: 500px;
    margin-top: 150px;
}
</style>

    <script>
export default {
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
                Email: this.Email,
                Password: this.Password,
            };
            this.clicked = true
            this.$store.dispatch("login", user);
        },
    },
};
</script>