<template>
  <div>
    <Pokedetail :pokemon="pokemon" />
  </div>
</template>

<script lang="ts">
import { getPokemon } from '~/middleware/pokemon'
import store from '~/store/store'
import Pokedetail from '~/components/Pokedetail.vue'

export default {
  components: {
    Pokedetail,
  },
  data() {
    return {
      pokemon: {
        name: '',
        sprites: {
          front_default: '',
        },
      },
    }
  },
  beforeMount() {
    this.fetchPokemon()
  },
  methods: {
    async fetchPokemon() {
      this.pokemon = await getPokemon(store.state.pokemon)
    },
  },
}
</script>
