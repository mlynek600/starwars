import { Dispatch } from 'redux'
import axios from 'axios'
import {
  CHARACTERS_FAIL,
  CHARACTERS_LOADING,
  CHARACTERS_SUCCESS,
  SPECIES_FAIL,
  SPECIES_LOADING,
  SPECIES_SUCCESS,
  CharactersDispatchTypes,
  SpeciesDispatchTypes,
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
