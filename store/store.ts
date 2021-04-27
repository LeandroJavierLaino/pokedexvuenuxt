import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    pokemon: '',
  },
  mutations: {
    setPokemon(state, newPokemon) {
      state.pokemon = newPokemon
    },
  },
})
