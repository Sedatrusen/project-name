import { DB } from '../plugins/firebase'

export const state = () => ({
  kutular: [],
})

export const mutations = {
  setkutular(state, kutular) {
    state.kutular = kutular
  },
}

export const actions = {
  addkutular({ commit }) {
    DB.ref('/kutular').on('value', (snapshot) => {
      commit('setkutular', snapshot.val())
    })

    // ...
  },
}
