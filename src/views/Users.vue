<template>
    <Navbar/>
  <div class="container" id="Users">
    <table class="table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
        </thead>
        <tbody v-if="users">
            <tr v-for="user in users" :key="user">
                <td>{{user.userID}}</td>
                <td>{{user.Name}}</td>
                <td><img id="userimg" :scr="user.Image" alt=""></td>
                <td>{{user.Email}}</td>
                <td>{{user.Password}}</td>
                <td><button @click="this.$store.dispatch('deleteUser', user.userID)"><i
                                class="fa-solid fa-trash-can"></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
  <Footer/>
</template>

<script>
   import Navbar from "../components/Navagation.vue"
    import Footer from "../components/Footing.vue" 
export default {
    components: {
        Navbar,
        Footer
    },
    mounted(){
        this.$store.dispatch('getUsers')
    },
    computed: {
        users(){
            return this.$store.state.users
        }
    }
}
</script>

<style scoped>
.table {
    border: 1px black;
    color: white;
    margin-top: 100px;
    left:50%;
}

#productimg {
    width: 100%;
    height: auto;
}
</style>