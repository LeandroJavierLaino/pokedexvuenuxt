import { api } from './api'
import { BasicPokemons } from '~/types/pokemons'

async function getPokemons(name: string) {
  const pokemonsFetched = await api.get(`pokemon/?offset=0&limit=1118`)
  const pokemonFiltered: BasicPokemons[] = pokemonsFetched.data.results.filter(
    (pokemonFetched: BasicPokemons) => {
      return pokemonFetched.name.includes(name)
    }
  )
  return pokemonFiltered
}

async function getPokemon(name: string) {
  const pokemonFetched = await api.get(`pokemon/${name}`)
  return pokemonFetched.data
}

export { getPokemons, getPokemon }
