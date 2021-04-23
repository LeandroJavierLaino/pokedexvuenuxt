<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div v-for="pokemon in pokemons" :key="pokemon.name">
          {{ pokemon.name }}
        </div>
        <Pokecard></Pokecard>
      </v-col> </v-row
  ></v-container>
</template>

<script>
import Pokecard from '~/components/Pokecard.vue'

export default {
  created() {
    this.$nuxt.$on('pokemons', (data) => {
      console.log(data)
      this.pokemons = data.map((rawData) => {
        return { name: rawData.name, url: rawData.url }
      })
    })
  },
  components: {
    Pokecard,
  },
  data() {
    return {
      title: 'Pokedex',
      pokemons: [],
    }
  },
  // computed: {
  //   pokemons() {
  //     return this.$store.pokemons
  //   },
  // },
}
</script>
