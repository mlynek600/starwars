import { Dispatch } from 'redux'
import axios from 'axios'
import {
  CHARACTERS_FAIL,
  CHARACTERS_LOADING,
  CHARACTERS_SUCCESS,
  SPECIES_FAIL,
  SPECIES_LOADING,
  SPECIES_SUCCESS,
  FILM_FAIL,
  FILM_LOADING,
  FILM_SUCCESS,
  CharactersDispatchTypes,
  SpeciesDispatchTypes,
  FilmDispatchTypes,
} from './starwarsActionTypes'

export const GetStarwarsCharacters = (page: number) => async (
  dispatch: Dispatch<CharactersDispatchTypes>
): Promise<void> => {
  try {
    dispatch({ type: CHARACTERS_LOADING })
    const res = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    )
    dispatch({
      type: CHARACTERS_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: CHARACTERS_FAIL,
    })
  }
}

export const GetStarwarsSpecies = (page: number) => async (
  dispatch: Dispatch<SpeciesDispatchTypes>
): Promise<void> => {
  try {
    dispatch({ type: SPECIES_LOADING })
    const res = await axios.get(
      `https://swapi.dev/api/species/?page=${page}`
    )
    dispatch({
      type: SPECIES_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: SPECIES_FAIL,
    })
  }
}

export const GetStarwarsFilm = (filmUrl: string) => async (
  dispatch: Dispatch<FilmDispatchTypes>
): Promise<void> => {
  try {
    dispatch({ type: FILM_LOADING })
    const res = await axios.get(filmUrl)
    dispatch({
      type: FILM_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: FILM_FAIL,
    })
  }
}
