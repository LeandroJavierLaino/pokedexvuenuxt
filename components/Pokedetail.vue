<template>
  <v-card class="card">
    <div class="imagecontainer">
      <v-img :src="pokemon.sprites['front_default']" class="image">
        <v-card-title>{{ pokemon.name }}</v-card-title>
        <v-card-subtitle>{{ pokemon.id }}</v-card-subtitle>
      </v-img>
    </div>

    <v-divider />
    <v-divider />
    <v-card-text>{{ 'Physical Characteristics' }}</v-card-text>
    <v-divider />
    <v-card-text>{{ `Weight : ${pokemon.weight}` }}</v-card-text>
    <v-card-text>{{ `Height : ${pokemon.height}` }}</v-card-text>
    <v-divider />
    <v-divider />
    <v-card-text>{{ 'Skills' }}</v-card-text>
    <v-divider />
    <v-card-text
      v-for="(skill, index) in pokemon.abilities"
      :key="skill.ability.name"
      >{{ `[${index}] : ${skill.ability.name}` }}</v-card-text
    >
    <v-divider />
    <v-divider />
    <v-card-text>{{ 'Types' }}</v-card-text>
    <v-divider />
    <v-card-text v-for="(type, index) in pokemon.types" :key="type.name">{{
      `[${index}] : ${type.type.name}`
    }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    pokemon: {
      type: Object,
      default: null,
      required: false,
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
  align-self: center;
  margin: 50px;
}
</style>
