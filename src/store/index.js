import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    msg: null,
    admin: false,
    user: null || JSON.parse(localStorage.getItem('user'))
  },
  getters: {},
  mutations: {
    stateProducts(state, products) {
      state.products = products
    },
    stateProduct(state, product) {
      state.product = product
    },
    stateUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    },
  },
  actions: {
    admincheck: (context) => {
      let user = context.state.user
      if (user != null) {
        if (user.userRole === "admin") {
          context.state.admin = true
        }
      }
    },
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
      const {
        Name,
        Image,
        Information,
        Category,
        Price
      } = payload

      fetch('https://rbtech.herokuapp.com/products/', {
          method: 'POST',
          body: JSON.stringify({
            Name: Name,
            Image: Image,
            Information: Information,
            Category: Category,
            Price: Price
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(data => context.state.product = data.product)
        .then(() => context.dispatch('getProducts'));
    },
    editProduct(context, product) {
      console.log(product);
      fetch(`http://localhost:4023/products/${product.productID}`, {
          method: "PATCH",
          body: JSON.stringify(product),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        .then((editProduct) => editProduct.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getProducts")
        })
    },
    register: async (context, data) => {
      console.log("Sup")
      await fetch('http://rbtech.herokuapp.com/user/register', {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then(res => res.json())
        .then(userData => context.state.msg = userData.msg)
    },
    //   login : async (context, data) => {
    //     fetch(`http://localhost:4023/user/login`,{
    //       method: "POST",
    //       body: JSON.stringify(data),
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8'
    //       }
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       let user = data.results
    //       console.log(user)
    //       context.commit("stateUser", user);
    //       if (user.Role === "Admin") {
    //         context.state.admin = true
    //       }
    //     });
    // },
    regitser: async (context, payload) => {
      await fetch("http://localhost:4023/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            payload
          ),
        })
        .then(res => res.json())
        .then((data) => {
          context.commit('stateUser', data)
          console.log(data);
        })
    },
    login: async (context, payload) => {
      await fetch("http://localhost:4023/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            payload
          ),
        })
        .then(res => res.json())
        .then((data) => {
          context.commit('stateUser', data)
          console.log(data);
        })
    },
    getcart: async (context, id) => {
      // id = context.state.user.id
      await fetch("http://localhost:4023/user/" + id + "/cart", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data != null) {
            context.commit("setcart", JSON.parse(data));
          }
        });
    },
    addCart: async (context, item, id) => {
      id = context.state.user.id;
      console.log(item);
      await fetch("http://localhost:4023/user/" + id + "/cart", {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("cart", id);
        });
    },
    clearCart: async (context, id) => {
      await fetch("http://localhost:4023/user/" + id + "/cart", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("cart", id);
        });
    },
    deleteCart: async (context, list, id) => {
      id = context.state.user.id;
      await fetch(
          "http://localhost:4023/user/" + id + "/cart/" + list.cartid, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "x-auth-token": context.state.token,
            },
          }
        )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
    },
  },
  modules: {}
})