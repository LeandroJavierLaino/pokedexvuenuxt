<template>
  <v-app>
    <v-app-bar color="red darken-2" :clipped-left="clipped" fixed app>
      <v-btn
        v-if="!pokemonSelected"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        placeholder="Find a pokemon . . . "
        @input="updatesearch($event)"
        @value="search"
      />
      <v-btn icon @click="searchPokemon">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer />
      <v-toolbar-title class="title" v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { api } from '~/middleware/api'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Pokedex',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'pokemon',
          to: '/pokemon',
        },
      ],
      search: '',
      pokemons: [],
      pokemonSelected: false,
      right: true,
      rightDrawer: false,
      title: 'Pokedex',
    }
  },
  methods: {
    async searchPokemon() {
      console.log(this.search)
      if (this.search.length > 3) {
        const pokemonsFetched = await api.get(`pokemon/?offset=0&limit=1118`)
        console.log(pokemonsFetched)
        const pokemonFiltered = pokemonsFetched.data.results.filter(
          (pokemonFetched) => {
            return pokemonFetched.name.includes(this.search)
          }
        )
        this.pokemons = pokemonFiltered
        this.$nuxt.$emit('pokemons', pokemonFiltered)
        //this.$store.commit('CHANGE_POKEMONS', pokemonFiltered)
        console.log(pokemonFiltered)
      }
    },
    updatesearch(event) {
      console.log(event)
    },
  },
}
</script>

<style>
.title {
  color: white;
}
</style>
