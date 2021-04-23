export const state = () => ({
  pokemons: [],
})

export const mutations = {
  // TODO: check types
  CHANGE_POKEMONS(state, pokemons) {
    state.pokemons = pokemons
  },
}
