<template>
  <v-card>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ `#${pokemon.id}` }}</v-card-subtitle>
    <!-- create a class to adjust the pokemon image -->
    <v-img
      :v-if="pokemon.sprites != undefined"
      :src="pokemon.sprites['front_default']"
      height="750px"
    ></v-img>
    <v-card-actions>
      <v-btn icon="mdi-badge-account-horizontal-outline">
        <v-icon color="secondary">mdi-badge-account-horizontal-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { getPokemon } from '~/middleware/pokemon'
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: '',
    },
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
      const fetchingpoke = await getPokemon(this.name)
      console.log(fetchingpoke)
      this.pokemon = fetchingpoke
    },
  },
}
</script>
