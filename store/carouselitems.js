import { DB } from '../plugins/firebase'

export const state = () => ({
  carouselitems: [],
})

export const mutations = {
  setcarouselitems(state, carouselitems) {
    state.carouselitems = carouselitems
  },
}

export const actions = {
  addcarouselitems({ commit }) {
    DB.ref('/carouselitems').on('value', (snapshot) => {
      commit('setcarouselitems', snapshot.val())
    })

    // ...
  },
}
