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
    },
    stateProduct(state, product) {
      state.product = product
    }
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://rbtech.herokuapp.com/products")
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
    editProduct(context, product) {
      fetch(`http://rbtech.herokuapp.com/products/${product.productID}` , {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then((editProduct) => editProduct.
      json())
      .then((data) => {
        console.log(data);
        context.dispatch("getProducts")
      })
    } 
  },

  modules: {}
})