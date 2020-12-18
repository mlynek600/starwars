import {
  StarwarsCharacters,
  CharactersDispatchTypes,
  CHARACTERS_FAIL,
  CHARACTERS_LOADING,
  CHARACTERS_SUCCESS,
  SPECIES_FAIL,
  SPECIES_LOADING,
  SPECIES_SUCCESS,
} from '../actions/starwarsActionTypes'

interface DefaultState {
  loading: boolean
  characters?: StarwarsCharacters
}

const defaultState: DefaultState = { loading: false }

const starwarsReducer = (
  state: DefaultState = defaultState,
  action: CharactersDispatchTypes
): DefaultState => {
  switch (action.type) {
    case CHARACTERS_FAIL:
      return { ...state, loading: false }
    case CHARACTERS_LOADING:
      return { ...state, loading: true }
    case CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
      }
    default:
      return state
  }
}

export default starwarsReducer
