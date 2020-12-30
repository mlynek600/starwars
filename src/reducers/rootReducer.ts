import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import filmsReducer from './filmsReducer'
import speciesReducer from './speciesReducer'

const rootReducer = combineReducers({
  characters: charactersReducer,
  species: speciesReducer,
  films: filmsReducer,
})

export default rootReducer
