import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Characters from './components/Characters'
import { Store } from './Store'
import {
  GetStarwarsCharacters,
  GetStarwarsSpecies,
} from './actions/starwarsActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetStarwarsCharacters(1))

    for (let i = 1; i < 5; i++) {
      dispatch(GetStarwarsSpecies(i))
    }
  }, [])

  const starwarsState = useSelector((state: Store) => state)

  return (
    <div className="App">
      <Characters
        characters={starwarsState.characters.characters?.results}
        species={starwarsState.species.species?.results}
      />
    </div>
  )
}
export default App
