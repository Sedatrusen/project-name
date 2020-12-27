import { auth, DB } from '../plugins/firebase'

export const state = () => ({
  Products: [],
  options: [],

  whislist: [],
})

export const getters = {
  cartProducts(state, getters, rootState, rootGetters) {
    return state.whislist.map((cartItem) => {
      const product = rootState.products.options.find(
        (product) => product.id === cartItem.id
      )
      return {
        logo: product.logo,
        price: product.price,
        name: product.name,
      }
    })
  },
  cartTotal(state, getters) {
    return getters.cartProducts.reduce(
      (total, product) => total + product.price,
      0
    )
  },
}

export const mutations = {
  pushProductToCart(state, productId) {
    state.whislist.push({
      id: productId,
    })
  },
  emptyCart(state) {
    state.whislist = []
  },
  setproductitems(state, Products) {
    state.Products = Products
  },
  setoptions(state, options) {
    state.options = options
  },
}
export const actions = {
  addProductToCart(
    { state, getters, commit, rootState, rootGetters },
    product
  ) {
    if (product) {
      const cartItem = state.whislist.find((item) => item.id === product)
      if (!cartItem) {
        const userıd = auth.currentUser.uid
        DB.ref('/baskets').child(userıd).push({
          product,
        })
        // commit('pushProductToCart', product)
      }
    }
  },
  chechwhislist({ commit }) {
    const userıd = auth.currentUser.uid
    DB.ref('/baskets')
      .child(userıd)
      .on('value', (snapshot) => {
        commit('emptyCart')
        snapshot.forEach((item) => {
          commit('pushProductToCart', item.val().product)
        })
      })
  },
  checkout({ commit }) {
    DB.ref('/baskets').child(auth.currentUser.uid).remove()
    commit('emptyCart')
  },
  addproducts({ commit }) {
    DB.ref('/Products').on('value', (snapshot) => {
      commit('setproductitems', snapshot.val())
    })

    // ...
  },
  addoptions({ commit }) {
    DB.ref('/options').on('value', (snapshot) => {
      commit('setoptions', snapshot.val())
    })
  },
}
