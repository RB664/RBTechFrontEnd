<template>
    <Navbar />

    <div id="Contact" class="container">
        <h1>Contact us</h1>
        <h5>Message us on this number</h5>
        <div><i class="fa-solid fa-phone"></i>0725278261</div>
        <h5>Write us an email to this email address</h5>
        <div><i class="fa-solid fa-envelope"></i>rbtech@gmail.com</div>
        <form id="form" action="https://formspree.io/f/xbjbdgyp" method="POST">
            <div class="mb-3">
                <label>
                Your email:
                <input type="email" name="email" class="form-control">
            </label>
            </div>
            <div class="mb-3">
                <label>
                Your message:
                <textarea name="message" class="form-control"></textarea>
            </label>
            </div>
            
            
            <button type="submit">Send</button>
        </form>
    </div>
    <div>

    </div>
    <Footer />
</template>

<style scoped>
#Contact {
    margin-top: 100px;
    text-align: center;
    color: white;
    margin-bottom: 167px;
}
</style>

<script>
import Navbar from '../components/Navagation.vue'
import Footer from '../components/Footing.vue'
export default {
    components: {
        Navbar,
        Footer
    }
}
</script>