export type BasicPokemons = {
  name: string
  url: string
}

type Sprites = {
  front_default: string
}

type Skill = {
  name: string
}

type Ability = {
  name: string
  url: string
}

type AbilitySlot = {
  ability: Ability
  is_hidden: boolean
  slot: number
}

type Type = {
  name: string
  url: string
}

type TypeSlot = {
  slot: number
  type: Type
}

export type PokemonCard = {
  name: string
  id: number
  sprites: Sprites
  height?: number
  weight?: number
  skills?: Skill[]
  types?: TypeSlot[]
}
