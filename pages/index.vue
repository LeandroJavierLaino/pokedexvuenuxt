<template>
  <div>
    <v-app-bar color="red darken-2" app>
      <v-text-field
        v-model="search"
        placeholder="Find a pokemon . . . "
        @value="search"
      />
      <v-btn icon @click="searchPokemon">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer />
      <v-toolbar-title class="title" v-text="title" />
    </v-app-bar>
    <div class="pokecontainer">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokecard">
        <Pokecard :name="pokemon.name" />
      </div>
    </div>
  </div>
</template>

<script>
import Pokecard from '~/components/Pokecard.vue'
import { getPokemons } from '~/middleware/pokemon'

export default {
  components: {
    Pokecard,
  },
  data() {
    return {
      title: 'Pokedex',
      pokemons: [],
      search: '',
    }
  },
  created() {
    this.$nuxt.$on('pokemons', (data) => {
      this.pokemons = data.map((rawData) => {
        return { name: rawData.name, url: rawData.url }
      })
    })
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
  },
}
</script>
<style>
.maincontainer {
  display: flex;
  flex: 1;
  max-width: 1500px;
}

.pokecontainer {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.pokecard {
  margin: 1em;
}
</style>
