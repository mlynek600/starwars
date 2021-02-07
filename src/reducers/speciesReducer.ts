/* eslint-disable indent */
import {
  SPECIES_FAIL,
  SPECIES_LOADING,
  SPECIES_SUCCESS,
  StarwarsSpecies,
  SpeciesDispatchTypes,
} from '../actions/starwarsActionTypes'

interface DefaultState {
  loading: boolean
  species?: StarwarsSpecies
}

const defaultState: DefaultState = { loading: false }

const speciesReducer = (
  state: DefaultState = defaultState,
  action: SpeciesDispatchTypes
): DefaultState => {
  switch (action.type) {
    case SPECIES_FAIL:
      return { ...state, loading: false }
    case SPECIES_LOADING:
      return { ...state, loading: true }
    case SPECIES_SUCCESS:
      return {
        ...state,
        loading: false,
        species: !state.species
          ? action.payload
          : {
              ...state.species,
              results: [
                ...state.species.results.concat(action.payload.results),
              ],
            },
      }
    default:
      return state
  }
}

export default speciesReducer
