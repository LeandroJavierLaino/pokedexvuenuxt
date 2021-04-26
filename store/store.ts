export const contextstate = () => ({
  pokemon: '',
})

export const mutations = {
  // TODO: check types
  CHANGE_POKEMONS(state: typeof contextstate, pokemon: string) {
    state.arguments.pokemon = pokemon
  },
}
