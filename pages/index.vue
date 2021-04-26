<template>
  <v-container>
    <!-- <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6"> -->
    <div class="pokecontainer">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokecard">
        <Pokecard :name="pokemon.name"></Pokecard>
      </div>
    </div>
    <!-- </v-col> </v-row
  >-->
  </v-container>
</template>

<script>
import Pokecard from '~/components/Pokecard.vue'

export default {
  components: {
    Pokecard,
  },
  data() {
    return {
      title: 'Pokedex',
      pokemons: [],
    }
  },
  created() {
    this.$nuxt.$on('pokemons', (data) => {
      this.pokemons = data.map((rawData) => {
        return { name: rawData.name, url: rawData.url }
      })
    })
  },
}
</script>
<style>
.pokecointainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.pokecard {
  margin: 1em;
}
</style>
