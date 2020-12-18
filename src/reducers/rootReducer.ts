import { combineReducers } from 'redux'
import charactersReducer from './chatactersReducer'
import speciesReducer from './speciesReducer'

const rootReducer = combineReducers({
  starwars: charactersReducer,
  speciec: speciesReducer,
})

export default rootReducer
