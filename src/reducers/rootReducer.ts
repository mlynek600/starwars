import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import speciesReducer from './speciesReducer'

const rootReducer = combineReducers({
  characters: charactersReducer,
  species: speciesReducer,
})

export default rootReducer
