import {
  createStore
} from 'vuex'
import router from '@/router'
export default createStore({
  state: {
    products: null,
    product: null,
    msg: null,
    admin: false,
    users : null,
    user: null || JSON.parse(localStorage.getItem('user')),
    cart : null,
    singleUser : null
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
        context.dispatch('getcart')
      }
    },
    getUsers: async (context) => {
      fetch("https://rbtech.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => {
        context.state.users = data.users
        console.log(context.state.users)
      })
    },
    getUser: async (context, id) => {
      fetch(`https://rbtech.herokuapp.com/user/${id}`)
        .then((res) => res.json())
        .then(data => context.state.singleUser = data.user)
      },
    deleteUser: async (context, id) => {
      await fetch(`https://rbtech.herokuapp.com/user/${id}`, {
          method: 'DELETE',
        })
        .then(data => data.json())
        .then((data) => {
          console.log(data.msg  )
          context.dispatch('getUsers')
        });
    },
    editUser: async (context, user) => {
      console.log(user.userID);
      // fetch("http://localhost:4023/user/" + user.userID, {
      fetch("https://rbtech.herokuapp.com/user/" + user.userID, {
        method: "PUT",
        body: JSON.stringify(user),
        headers:{
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getUser", context.state.singleUser.userID)
      })
    },
    // editSUser: async (context, user) => {
    //   // console.log(user);
    //   fetch("https://rbtech.herokuapp.com/user/" + user.userID, {
    //     method: "PUT",
    //     body: JSON.stringify(user),
    //     headers:{
    //       "Content-type": "application/json; charset=UFT-8",
    //     }
    //   })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.results);
    //     context.dispatch("getUser",user.userID)
    //   })
    // },
    deleteSUser: async (context, userid) => {
      fetch(`https://gpu-land.herokuapp.com/users/${userid}`, {
      // fetch(`http://localhost:3001/users/${userid}`, {
        method: "DELETE",
      })
        .then((users) => users.json())
        .then((data) => {
          console.log(data.msg);
          context.state.user = null
          context.state.cart = null
          router.push('/login');
        });
    },
    getProducts: async (context) => {
      fetch("https://rbtech.herokuapp.com/products")
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
      fetch(`https://rbtech.herokuapp.com/products/${product.productID}`, {
          method: "PUT",
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
    register: async (context, payload) => {
      await fetch("https://rbtech.herokuapp.com/user/register", {
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
          // context.commit('stateUser', data)
          console.log(data)
          console.log(data.msg)
          context.state.msg = data.msg
          router.push('/login')
        })
    },
    login: async (context, payload) => {
      await fetch("https://rbtech.herokuapp.com/user/login", {
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
          context.commit('stateUser', data.user[0])
          console.log(data.msg);
        })
    },
    getcart: async (context, id) => {
      id = context.state.user.userID
      // console.log(id);
      await fetch("https://rbtech.herokuapp.com/user/" + id + "/cart", {
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
            context.state.cart = (data);
          } else {
            context.state.cart = null;
          }
        });
    },
    addCart: async (context, item, id) => {
      id = context.state.user.userID;
      console.log(item);
      await fetch("https://rbtech.herokuapp.com/user/" + id + "/cart", {
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
          context.dispatch("getcart");
        });
    },
    clearCart: async (context, id) => {
      id = context.state.user.userID;
      await fetch("https://rbtech.herokuapp.com/user/" + id + "/cart", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart");
        });
    },
    deleteCart: async (context, list, id) => {
      id = context.state.user.userID;
      console.log(list);
      await fetch(
          "https://rbtech.herokuapp.com/user/" + id + "/cart/" + list.cart_id, {
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
          context.dispatch("getcart");
        });
    },
  },
  modules: {}
})