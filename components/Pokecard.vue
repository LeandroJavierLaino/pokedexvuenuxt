<template>
  <v-card class="card">
    <v-card-title>{{ name }}</v-card-title>

    <div class="imagecontainer">
      <v-img :src="pokemon.sprites['front_default']" class="image" />
    </div>

    <v-card-actions>
      <v-btn icon @click="selectPokemon">
        <v-icon color="secondary">mdi-badge-account-horizontal-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { getPokemon } from '~/middleware/pokemon'
import store from '~/store/store'

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
      this.pokemon = fetchingpoke
    },
    selectPokemon() {
      store.commit('setPokemon', this.name)
      this.$router.push(`/pokemon/${this.name}`)
    },
  },
}
</script>

<style>
.imagecontainer {
  height: 380px;
  width: 380px;
}
.image {
  max-height: 100%;
  max-width: 100%;
}
.card {
  width: 400px;
}
</style>
