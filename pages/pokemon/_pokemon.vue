<template>
  <div>
    <v-app-bar color="red darken-2" app>
      <v-btn icon @click="goBack">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-spacer />
      <v-toolbar-title class="title" v-text="title" />
    </v-app-bar>
    <Pokedetail :pokemon="pokemon" />
  </div>
</template>

<script>
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
        title: 'Pokedex',
      },
    }
  },
  created() {
    this.fetchPokemon().then((result) => (this.pokemon = result))
  },
  methods: {
    async fetchPokemon() {
      return await getPokemon(store.state.pokemon)
    },
    goBack() {
      this.$router.back()
    },
  },
}
</script>
