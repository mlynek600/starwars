export const CHARACTERS_LOADING = 'CHARACTERS_LOADING'
export const CHARACTERS_FAIL = 'CHARACTERS_FAIL'
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS'
export const SPECIES_LOADING = 'SPECIES_LOADING'
export const SPECIES_FAIL = 'SPECIES_FAIL'
export const SPECIES_SUCCESS = 'SPECIES_SUCCESS'
export const FILM_LOADING = 'FILM_LOADING'
export const FILM_FAIL = 'FILM_FAIL'
export const FILM_SUCCESS = 'FILM_SUCCESS'

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
  results: Species[]
}

export type Film = {
  title: string
  release_date: string
  director: string
  url: string
}

export type Species = { name: string; url: string }

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

export interface FilmLoading {
  type: typeof FILM_LOADING
}

export interface FilmFail {
  type: typeof FILM_FAIL
}

export interface FilmSuccess {
  type: typeof FILM_SUCCESS
  payload: Film
}

export type CharactersDispatchTypes =
  | CharactersLoading
  | CharactersFail
  | CharactersSuccess

export type SpeciesDispatchTypes =
  | SpeciesLoading
  | SpeciesFail
  | SpeciesSuccess

export type FilmDispatchTypes = FilmLoading | FilmFail | FilmSuccess
