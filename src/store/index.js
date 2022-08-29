import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {},
  mutations: {
    stateProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://localhost:4023/products")
        .then((res) => res.json())
        .then((data) => {
          context.state.products = data.products
          console.log(context.state.products)
        })
    },
    getProduct: async (context, id) => {
      fetch(`https://rbtech.herokuapp.com/products/${id}`)
        .then((res) => res.json())
        .then(data => context.state.product = data.product)
        .then(console.log(context.state.product));
    },
    deleteProduct: async (context, id) => {
      await fetch(`https://rbtech.herokuapp.com/products/${id}`, {
          method: 'DELETE',
        })
        .then(data => context.state.product = data.product)
        .then(() => context.dispatch('getProducts'));
    },
    addProduct: async (context, payload) => {
      const{
        Name,
        Image,
        Information,
        Category,
        Price
      } =payload

      fetch('https://rbtech.herokuapp.com/products/', {
          method: 'POST',
          body: JSON.stringify({
            Name:Name,
            Image:Image,
            Information:Information,
            Category:Category,
            Price:Price
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(data => context.state.product = data.product)
        .then(() => context.dispatch('getProducts'));
    },
    editProduct: async (context, product) => {
      fetch(`http://localhost:4023/products/${id}` , {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg)
        context.dispatch("getProducts")
      })
    } 
  },

  modules: {}
})