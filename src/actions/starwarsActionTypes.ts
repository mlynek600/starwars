export const CHARACTERS_LOADING = 'CHARACTERS_LOADING'
export const CHARACTERS_FAIL = 'CHARACTERS_FAIL'
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS'
export const SPECIES_LOADING = 'SPECIES_LOADING'
export const SPECIES_FAIL = 'SPECIES_FAIL'
export const SPECIES_SUCCESS = 'SPECIES_SUCCESS'

export type StarwarsCharacters = {
  count: number
  next: string
  results: StarwarsCharacter[]
}

export type StarwarsCharacter = {
  name: string
  films: string[]
  species: string[] | []
}

export type StarwarsSpecies = {
  count: number
  next: string
  results: Species[]
}

export type Film = { name: string; release_date: string; director: string }

export type Species = { name: string }

export interface CharactersLoading {
  type: typeof CHARACTERS_LOADING
}

export interface CharactersFail {
  type: typeof CHARACTERS_FAIL
}

export interface CharactersSuccess {
  type: typeof CHARACTERS_SUCCESS
  payload: StarwarsCharacters
}

export interface SpeciesLoading {
  type: typeof SPECIES_LOADING
}

export interface SpeciesFail {
  type: typeof SPECIES_FAIL
}

export interface SpeciesSuccess {
  type: typeof SPECIES_SUCCESS
  payload: StarwarsSpecies
}

export type CharactersDispatchTypes =
  | CharactersLoading
  | CharactersFail
  | CharactersSuccess

export type SpeciesDispatchTypes =
  | SpeciesLoading
  | SpeciesFail
  | SpeciesSuccess
