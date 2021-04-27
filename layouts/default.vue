<template>
  <v-app>
    <v-app-bar color="red darken-2" app>
      <v-btn v-if="!!pokemonWasSelected" icon @click="goBack">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-text-field
        v-if="!pokemonWasSelected"
        v-model="search"
        placeholder="Find a pokemon . . . "
        @value="search"
      />
      <v-btn v-if="!pokemonWasSelected" icon @click="searchPokemon">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer />
      <v-toolbar-title class="title" v-text="title" />
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { getPokemons } from '~/middleware/pokemon'

export default {
  data() {
    return {
      search: '',
      pokemons: [],
      pokemonWasSelected: this.$store.state.pokemon,
      title: 'Pokedex',
    }
  },

  methods: {
    async searchPokemon() {
      if (this.search.length > 3) {
        const pokemonsFetched = await getPokemons(this.search)
        this.pokemons = pokemonsFetched
        this.$nuxt.$emit('pokemons', pokemonsFetched)
      } else {
        this.$nuxt.$emit('pokemons', [])
      }
    },
    goBack() {
      this.$router.back()
    },
  },
}
</script>

<style>
.title {
  color: white;
}
</style>
