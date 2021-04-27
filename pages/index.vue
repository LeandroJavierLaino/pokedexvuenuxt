<template>
  <div class="pokecontainer">
    <div v-for="pokemon in pokemons" :key="pokemon.name" class="pokecard">
      <Pokecard :name="pokemon.name" />
    </div>
  </div>
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
