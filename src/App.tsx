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

  const handlePageClick = (page: number) => {
    dispatch(GetStarwarsCharacters(page))
  }

  return (
    <div className="App">
      <Characters
        characters={starwarsState.characters.characters?.results}
        charactersCount={starwarsState.characters.characters?.count}
        species={starwarsState.species.species?.results}
        handlePageClick={handlePageClick}
      />
    </div>
  )
}
export default App
