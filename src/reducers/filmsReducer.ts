/* eslint-disable indent */
import {
  FILM_FAIL,
  FILM_LOADING,
  FILM_SUCCESS,
  Film,
  FilmDispatchTypes,
} from '../actions/starwarsActionTypes'

interface DefaultState {
  loading: boolean
  films?: Film[]
}

const defaultState: DefaultState = { loading: false }

const filmsReducer = (
  state: DefaultState = defaultState,
  action: FilmDispatchTypes
): DefaultState => {
  switch (action.type) {
    case FILM_FAIL:
      return { ...state, loading: false }

    case FILM_LOADING:
      return { ...state, loading: true }

    case FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        films: state.films
          ? [...state.films].find(
              (film) => film.title === action.payload.title
            )
            ? [...state.films]
            : [...state.films, action.payload]
          : [action.payload],
      }

    default:
      return state
  }
}

export default filmsReducer
